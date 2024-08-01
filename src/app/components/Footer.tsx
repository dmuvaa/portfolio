import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6">
      <div className="container mx-auto flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
        <p className="text-sm text-gray-600">&copy; 2024 Dennis Muvaa. All rights reserved.</p>
      </div>
    </footer>
  );
}
