import { useState } from "react";
import logoText from "../assets/logo-text.png";

const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "Technologies", href: "#technologies" },
  { label: "Projects", href: "#" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="lg:hidden text-2xl cursor-pointer"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
        <div>
          <img src={logoText} alt="Dev Stack Logo" className="h-8" />
        </div>
        <div className="hidden lg:flex gap-8 text-sm text-gray-600">
          <a href="#" className="text-pink-600 font-medium">
            Home
          </a>
          <a href="#technologies" className="hover:text-pink-600">
            Technologies
          </a>
          <a href="#" className="hover:text-pink-600">
            Projects
          </a>
          <a href="#" className="hover:text-pink-600">
            About
          </a>
          <a href="#" className="hover:text-pink-600">
            Contact
          </a>
        </div>
        <div className="flex items-center gap-4 text-sm font-medium">
          <button className="text-gray-700 hover:text-gray-900 cursor-pointer">
            Sign In
          </button>
          <button className="bg-brand text-white px-5 py-2 rounded-full cursor-pointer hover:opacity-90">
            Sign Up
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <ul className="max-w-6xl mx-auto px-4 py-3 flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 text-sm text-gray-700 hover:text-pink-600"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
