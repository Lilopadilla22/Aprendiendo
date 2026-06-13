import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="border-b border-gray-200 bg-white px-6 py-4 flex items-center justify-between">
      <Link
        to="/"
        className="flex items-center gap-2.5 hover:opacity-70 transition-opacity"
      >
        <span className="font-mono text-xs font-bold bg-gray-900 text-white px-2 py-1 rounded">
          JS
        </span>
        <span className="font-semibold text-gray-900 text-sm">
          Aprendiendo JavaScript
        </span>
      </Link>

      <div className="flex items-center gap-6 ml-auto">
        <Link
          to="/estructura"
          className="text-xs text-gray-400 hover:text-gray-700 transition hidden sm:block"
        >
          Estructura de software
        </Link>
        <span className="text-xs text-gray-600 hidden sm:block">|</span>
        <Link
          to="/"
          className="text-xs text-gray-400 hover:text-gray-700 transition hidden sm:block"
        >
          <span className="text-xs text-gray-400 hidden sm:block">
            guía de repaso profesional
          </span>
        </Link>
      </div>
    </nav>
  );
}
