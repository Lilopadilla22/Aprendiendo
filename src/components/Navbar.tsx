import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="border-b border-gray-200 bg-white px-6 py-4 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-2.5 hover:opacity-70 transition-opacity">
        <span className="font-mono text-xs font-bold bg-gray-900 text-white px-2 py-1 rounded">
          JS
        </span>
        <span className="font-semibold text-gray-900 text-sm">Aprendiendo JavaScript</span>
      </Link>

      <span className="text-xs text-gray-400 hidden sm:block">
        guía de repaso profesional
      </span>
    </nav>
  );
}
