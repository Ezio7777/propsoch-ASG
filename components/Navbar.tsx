"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Resources", href: "#resources" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);
  const shareRef = useRef<HTMLDivElement>(null);

  // Focus search input when opened
  useEffect(() => {
    if (searchOpen) setTimeout(() => searchRef.current?.focus(), 120);
  }, [searchOpen]);

  // Close share popover on outside click
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (shareRef.current && !shareRef.current.contains(e.target as Node)) {
        setShareOpen(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  function copyLink() {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => { setCopied(false); setShareOpen(false); }, 1500);
  }

  function shareWhatsApp() {
    window.open(`https://wa.me/?text=${encodeURIComponent(window.location.href)}`, "_blank");
    setShareOpen(false);
  }

  return (
    <>
      {/* ── TOP HEADER ── */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-[#ff6d33] text-white px-4 py-2 rounded text-sm"
        >
          Skip to main content
        </a>

        <nav
          aria-label="Main navigation"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between gap-3"
        >
          {/* Logo */}
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

          {/* ── DESKTOP nav links ── */}
          <ul className="hidden md:flex items-center gap-8 flex-1 justify-center" role="list">
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

          {/* ── DESKTOP right ── */}
          <div className="hidden md:flex items-center gap-1.5">
            {/* Search */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Search"
              className="p-2.5 text-gray-500 hover:text-gray-900 rounded-xl hover:bg-gray-100 transition-all duration-150 cursor-pointer"
            >
              <SearchIcon />
            </button>

            {/* Like / Save */}
            <button
              aria-label="Save"
              className="p-2.5 text-gray-500 hover:text-rose-500 rounded-xl hover:bg-rose-50 transition-all duration-150 cursor-pointer"
            >
              <HeartIconNav />
            </button>

            {/* Share — desktop popover */}
            <div ref={shareRef} className="relative">
              <button
                onClick={() => setShareOpen(!shareOpen)}
                aria-label="Share"
                aria-expanded={shareOpen}
                className="p-2.5 text-gray-500 hover:text-[#ff6d33] rounded-xl hover:bg-orange-50 transition-all duration-150 cursor-pointer"
              >
                <ShareIconNav />
              </button>

              <AnimatePresence>
                {shareOpen && (
                  <motion.div
                    key="share-popover-desktop"
                    initial={{ opacity: 0, y: 6, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.95 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute top-full right-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden min-w-[180px] z-50"
                  >
                    <button
                      onClick={copyLink}
                      className="flex items-center gap-3 w-full px-4 py-3.5 text-sm text-gray-700 font-medium hover:bg-gray-50 transition-colors cursor-pointer border-b border-gray-100"
                    >
                      <CopyIcon />
                      {copied ? "Copied!" : "Copy Link"}
                    </button>
                    <button
                      onClick={shareWhatsApp}
                      className="flex items-center gap-3 w-full px-4 py-3.5 text-sm text-gray-700 font-medium hover:bg-gray-50 transition-colors cursor-pointer"
                    >
                      <WhatsAppIconSmall />
                      WhatsApp
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="w-px h-5 bg-gray-200 mx-1.5" aria-hidden="true" />

            <a
              href="#services"
              className="bg-[#ff6d33] hover:bg-[#e55d27] text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors duration-150 ml-0.5"
            >
              Get Started
            </a>
          </div>

          {/* ── MOBILE: only search icon ── */}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            aria-label="Search"
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <SearchIcon />
          </button>
        </nav>

        {/* ── ANIMATED SEARCH BAR ── slides down below navbar */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              key="search-bar"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden border-t border-gray-100 bg-white"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-3">
                <div className="flex-1 flex items-center gap-2 bg-gray-100 rounded-xl px-4 py-2.5">
                  <SearchIcon />
                  <input
                    ref={searchRef}
                    type="search"
                    placeholder="Search properties, areas, builders..."
                    className="flex-1 bg-transparent text-sm text-gray-800 placeholder-gray-500 outline-none"
                  />
                </div>
                <button
                  onClick={() => setSearchOpen(false)}
                  className="text-gray-500 hover:text-gray-900 font-medium text-sm cursor-pointer px-1"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ── MOBILE MENU OVERLAY (triggered from bottom bar) ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/30 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            {/* Sheet slides up from bottom bar */}
            <motion.div
              key="mobile-menu"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed bottom-16 left-0 right-0 z-50 md:hidden bg-white rounded-t-3xl shadow-2xl border-t border-gray-100 overflow-hidden"
            >
              <div className="w-10 h-1 bg-gray-200 rounded-full mx-auto mt-3 mb-1" />
              <div className="px-4 py-3 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 + 0.1 }}
                    className="flex items-center text-gray-800 font-semibold py-4 px-3 rounded-xl hover:bg-orange-50 hover:text-[#ff6d33] transition-colors border-b border-gray-50 last:border-0"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
              <div className="px-4 pb-6 pt-2">
                <a
                  href="#services"
                  className="block bg-[#ff6d33] text-white text-center font-semibold px-5 py-3.5 rounded-xl hover:bg-[#e55d27] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Book An Appointment
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ── MOBILE BOTTOM FIXED NAV BAR ── */}
      <nav
        aria-label="Mobile navigation"
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-100 shadow-[0_-4px_24px_rgba(0,0,0,0.07)]"
      >
        <div className="flex items-center justify-around h-16 px-2">
          {/* Home */}
          <a
            href="#main-content"
            className="flex flex-col items-center gap-1 text-[#ff6d33] cursor-pointer px-4"
            aria-label="Home"
          >
            <HomeIcon />
            <span className="text-[10px] font-semibold">Home</span>
          </a>

          {/* Like/Save */}
          <button
            className="flex flex-col items-center gap-1 text-gray-500 hover:text-[#ff6d33] transition-colors cursor-pointer px-4"
            aria-label="Save"
          >
            <HeartIcon />
            <span className="text-[10px] font-medium">Save</span>
          </button>

          {/* Share with popover */}
          <div className="relative flex flex-col items-center px-4">
            <button
              onClick={() => setShareOpen(!shareOpen)}
              className="flex flex-col items-center gap-1 text-gray-500 hover:text-[#ff6d33] transition-colors cursor-pointer"
              aria-label="Share"
              aria-expanded={shareOpen}
            >
              <ShareIcon />
              <span className="text-[10px] font-medium">Share</span>
            </button>

            {/* Share popover */}
            <AnimatePresence>
              {shareOpen && (
                <motion.div
                  key="share-popover"
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.95 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="absolute bottom-full mb-3 right-0 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden min-w-[180px]"
                >
                  <button
                    onClick={copyLink}
                    className="flex items-center gap-3 w-full px-4 py-3.5 text-sm text-gray-700 font-medium hover:bg-gray-50 transition-colors cursor-pointer border-b border-gray-100"
                  >
                    <CopyIcon />
                    {copied ? "Copied!" : "Copy Link"}
                  </button>
                  <button
                    onClick={shareWhatsApp}
                    className="flex items-center gap-3 w-full px-4 py-3.5 text-sm text-gray-700 font-medium hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <WhatsAppIconSmall />
                    WhatsApp
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Menu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex flex-col items-center gap-1 text-gray-500 hover:text-[#ff6d33] transition-colors cursor-pointer px-4"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            <MenuIcon open={mobileMenuOpen} />
            <span className="text-[10px] font-medium">Menu</span>
          </button>
        </div>
      </nav>
    </>
  );
}

/* ── Icons ── */
function HeartIconNav() {
  return (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}
function ShareIconNav() {
  return (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  );
}
function SearchIcon() {
  return (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
    </svg>
  );
}
function HomeIcon() {
  return (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 9.5L12 3l9 6.5V21H3V9.5z" /><path d="M9 21v-6h6v6" />
    </svg>
  );
}
function HeartIcon() {
  return (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}
function ShareIcon() {
  return (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  );
}
function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" viewBox="0 0 24 24" aria-hidden="true">
      {open ? <path d="M6 18L18 6M6 6l12 12" /> : <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>}
    </svg>
  );
}
function CopyIcon() {
  return (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
    </svg>
  );
}
function WhatsAppIconSmall() {
  return (
    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
