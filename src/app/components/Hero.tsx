import Link from "next/link";

interface HeroProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  className?: string;
}

export default function Hero({ title, subtitle, buttonText, buttonLink, className = "" }: HeroProps) {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">{title}</h1>
        <p className="mt-4 text-lg text-gray-700 md:text-xl">{subtitle}</p>
        <Link
          href={buttonLink}
          className="mt-6 inline-block rounded bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow hover:bg-blue-700"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
