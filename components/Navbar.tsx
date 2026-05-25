"use client";

import { useState } from "react";

// All nav links scroll to sections — no dead pages
const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Resources", href: "#resources" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-[#ff6d33] text-white px-4 py-2 rounded text-sm"
      >
        Skip to main content
      </a>

      <div className="bg-[#ff6d33] text-white text-sm text-center py-2 px-4">
        Check any property&apos;s{" "}
        <span className="underline font-semibold">fair price</span> &amp; negotiate
        confidently.
      </div>

      <nav aria-label="Main navigation" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#main-content" aria-label="Propsoch home" className="flex items-center gap-2 flex-shrink-0">
          <div className="w-8 h-8 bg-[#ff6d33] rounded-lg flex items-center justify-center" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
              <path d="M3 9.5L12 3l9 6.5V21H3V9.5z" />
              <path d="M9 21v-6h6v6" fill="white" />
            </svg>
          </div>
          <span className="font-bold text-lg tracking-tight">
            Prop<span className="text-[#ff6d33]">soch</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8" role="list">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors duration-150"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <button
            aria-label="Search properties"
            className="p-2 text-gray-500 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-100"
          >
            <SearchIcon />
          </button>
          <a
            href="#services"
            className="bg-[#ff6d33] hover:bg-[#e55d27] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors duration-150"
          >
            Get Started
          </a>
        </div>

        <button
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          className="md:hidden p-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <MenuIcon open={mobileOpen} />
        </button>
      </nav>

      {mobileOpen && (
        <div id="mobile-nav" className="md:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block text-gray-700 font-medium py-3 border-b border-gray-50 hover:text-[#ff6d33] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#services"
            className="block bg-[#ff6d33] text-white text-center font-semibold px-5 py-3 rounded-lg mt-3 hover:bg-[#e55d27] transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Get Started
          </a>
        </div>
      )}
    </header>
  );
}

function SearchIcon() {
  return (
    <svg
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      {open ? (
        <path d="M6 18L18 6M6 6l12 12" />
      ) : (
        <>
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </>
      )}
    </svg>
  );
}
