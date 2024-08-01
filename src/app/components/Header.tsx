import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div>
          <Link href="/" className="text-lg font-bold text-gray-900">
            Dennis Muvaa
          </Link>
        </div>
        <nav className="flex space-x-4">
          <Link href="/software-engineering" className="text-gray-700 hover:text-gray-900">
            Software Engineering
          </Link>
          <Link href="/technical-writing" className="text-gray-700 hover:text-gray-900">
            Technical Writing
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-gray-900">
            About
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-gray-900">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}