import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 mt-10">
      <p className="text-sm">© 2025 Kittokatsu. All rights reserved.</p>
      <div className="flex justify-center gap-6 mt-2">
        <Link href="/about" className="hover:text-gray-400">
          About
        </Link>
        <Link href="/contact" className="hover:text-gray-400">
          Contact
        </Link>
        <Link href="/privacy" className="hover:text-gray-400">
          Privacy
        </Link>
      </div>
    </footer>
  );
}
