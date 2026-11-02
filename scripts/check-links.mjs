#!/usr/bin/env node
import { readFile } from "node:fs/promises"
import path from "node:path"
import { pathToFileURL } from "node:url"

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..")
const contentDir = path.join(root, "content")

async function loadModule(file) {
  return import(pathToFileURL(path.join(contentDir, file)).href)
}

function collectUrls() {
  return Promise.all([
    loadModule("projects.ts").catch(() => null),
    loadModule("writing.ts").catch(() => null),
    loadModule("site.ts").catch(() => null),
  ]).then(async () => {
    // TS modules need a lighter parse for a plain Node script:
    // extract https? URLs from content/*.ts via regex.
    const files = ["projects.ts", "writing.ts", "site.ts", "experience.ts"]
    const urls = new Set()

    for (const file of files) {
      const text = await readFile(path.join(contentDir, file), "utf8")
      for (const match of text.matchAll(/https?:\/\/[^\s"'`)]+/g)) {
        let url = match[0]
        // Trim trailing punctuation that may appear in comments/types.
        url = url.replace(/[.,;]+$/, "")
        urls.add(url)
      }
    }

    return [...urls].sort()
  })
}

async function check(url) {
  try {
    const res = await fetch(url, {
      method: "HEAD",
      redirect: "follow",
      signal: AbortSignal.timeout(15000),
      headers: { "user-agent": "dennis-portfolio-link-check/1.0" },
    })
    // Some hosts reject HEAD; retry GET.
    if (res.status === 405 || res.status === 403) {
      const getRes = await fetch(url, {
        method: "GET",
        redirect: "follow",
        signal: AbortSignal.timeout(15000),
        headers: { "user-agent": "dennis-portfolio-link-check/1.0" },
      })
      return { url, status: getRes.status, ok: getRes.ok }
    }
    return { url, status: res.status, ok: res.ok }
  } catch (error) {
    return {
      url,
      status: 0,
      ok: false,
      error: error instanceof Error ? error.message : String(error),
    }
  }
}

const urls = await collectUrls()
console.log(`Checking ${urls.length} URLs from content/*.ts\n`)

const results = []
for (const url of urls) {
  const result = await check(url)
  results.push(result)
  const mark = result.ok ? "OK " : "FAIL"
  console.log(
    `${mark}  ${result.status || "ERR"}  ${url}${result.error ? ` (${result.error})` : ""}`
  )
}

const failed = results.filter((r) => !r.ok)
console.log(`\n${results.length - failed.length} ok, ${failed.length} failed`)
if (failed.length) {
  console.log("\nNon-200:")
  for (const f of failed) {
    console.log(`  ${f.status || "ERR"}  ${f.url}`)
  }
  process.exit(1)
}
