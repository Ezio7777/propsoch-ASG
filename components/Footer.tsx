"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const footerColumns = [
  {
    heading: "Top Developers in Bengaluru",
    links: ["Prestige Developers", "Godrej Properties", "Brigade Developers", "Sobha Developers", "Assetz Developers"],
  },
  {
    heading: "Top Areas in Bengaluru",
    links: ["Whitefield", "Sarjapur Road", "Bellandur", "Yelahanka", "HSR Layout"],
  },
  {
    heading: "Top Filters",
    links: ["Luxury Homes", "Properties <3Cr", "Properties <2Cr", "Ready To Move In", "Townships"],
  },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/propsoch",
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/propsoch",
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@propsoch",
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "Email us",
    href: "mailto:hello@propsoch.com",
    icon: (
      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
];

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
      className="bg-gray-950 text-gray-300 pb-20 md:pb-0"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">

        {/* Mobile: stacked, centered. Desktop: 4-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-14">

          {/* Brand column */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left gap-5">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#ff6d33] rounded-lg flex items-center justify-center flex-shrink-0" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                  <path d="M3 9.5L12 3l9 6.5V21H3V9.5z" />
                  <path d="M9 21v-6h6v6" fill="white" />
                </svg>
              </div>
              <span className="font-bold text-white text-lg tracking-tight">Propsoch</span>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Propsoch is the most advanced real estate research platform for homebuyers in India.
            </p>

            <nav aria-label="Social media links">
              <ul role="list" className="flex gap-2.5 justify-center md:justify-start">
                {socialLinks.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      aria-label={s.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 border border-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:border-[#ff6d33] hover:text-[#ff6d33] transition-colors duration-150"
                    >
                      {s.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="space-y-1 text-xs text-gray-500">
              <p>Thinkr Proptech Private Limited</p>
              <p>RERA: PRM/KA/RERA/1251/446/AG/220927/003103</p>
              <p>GSTIN - 12314ASDAD213 &nbsp;|&nbsp; CIN - 21312215151661</p>
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <nav key={col.heading} aria-label={col.heading} className="flex flex-col items-center text-center md:items-start md:text-left">
              <h4 className="text-white font-semibold mb-5 text-sm">{col.heading}</h4>
              <ul role="list" className="space-y-3">
                {col.links.map((linkText) => (
                  <li key={linkText}>
                    <span className="text-sm text-gray-400 cursor-default">{linkText}</span>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <div className="flex gap-5">
            <span className="cursor-default hover:text-gray-300 transition-colors">Privacy Policy</span>
            <span className="cursor-default hover:text-gray-300 transition-colors">Terms &amp; Conditions</span>
          </div>
          <p>&copy; Copyright Thinkr Proptech Pvt. Ltd. 2026</p>
        </div>
      </div>
    </motion.footer>
  );
}
