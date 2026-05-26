"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const cities = ["Bangalore", "Mumbai"] as const;
type City = (typeof cities)[number];
const VIDEO_ID = "RqBYQJRqUXs";

const trustBadges = [
  { value: "2750+", label: "Hours Advised" },
  { value: "1000+", label: "Happy Buyers" },
  { value: "210+", label: "Builder Partners" },
];

export default function Hero() {
  const [activeCity, setActiveCity] = useState<City>("Bangalore");
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section
      id="main-content"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden flex items-center"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 10% 50%, rgba(17,24,48,1) 0%, rgba(10,13,28,1) 55%, rgba(8,10,22,1) 100%)",
        minHeight: "92vh",
      }}
    >
      {/* ── Background depth layers ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Primary right-side warm glow — restrained */}
        <div
          className="absolute top-[-5%] right-[-8%] w-[640px] h-[640px] rounded-full opacity-[0.18] blur-[130px]"
          style={{ background: "radial-gradient(circle, #ff8c42 0%, #ff6d33 50%, transparent 75%)" }}
        />
        {/* Subtle bottom left indigo depth */}
        <div
          className="absolute bottom-[-10%] left-[-5%] w-[420px] h-[420px] rounded-full opacity-[0.14] blur-[100px]"
          style={{ background: "radial-gradient(circle, #1e3a8a 0%, #1e2d6b 50%, transparent 75%)" }}
        />
        {/* Centre atmospheric midtone */}
        <div
          className="absolute top-[55%] left-[38%] w-[280px] h-[280px] rounded-full opacity-[0.07] blur-[70px]"
          style={{ background: "#f59e0b" }}
        />
        {/* Subtle dot grid texture */}
        <div
          className="absolute inset-0 opacity-[0.028]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Top edge gradient line */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent 0%, rgba(255,109,51,0.4) 40%, rgba(255,109,51,0.4) 60%, transparent 100%)" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ── LEFT COPY ── */}
          <div className="space-y-8">

            {/* Eyebrow pill */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-flex items-center gap-2.5 bg-white/[0.06] border border-white/[0.10] text-slate-300 text-xs font-semibold px-4 py-2 rounded-full tracking-wide backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff6d33] animate-pulse flex-shrink-0" />
                India&apos;s Most Trusted Homebuying Platform
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl xl:text-[3.6rem] font-black text-white leading-[1.08] tracking-tight"
            >
              Visit curated homes,{" "}
              <span className="relative inline-block">
                <span
                  className="relative z-10 text-transparent bg-clip-text"
                  style={{ backgroundImage: "linear-gradient(135deg, #ff8c42 0%, #ff6d33 45%, #f59e0b 100%)" }}
                >
                  negotiate smarter
                </span>
                <span
                  className="absolute bottom-0.5 left-0 right-0 h-[2px] rounded-full opacity-50"
                  style={{ background: "linear-gradient(90deg, #ff6d33, #f59e0b)" }}
                  aria-hidden="true"
                />
              </span>{" "}
              &amp; buy intelligently.
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.28, ease: "easeOut" }}
              className="text-slate-400 text-lg leading-relaxed max-w-lg"
            >
              Get end-to-end guidance from property wizards who&apos;ve helped
              intelligent homebuyers like you buy{" "}
              <span className="text-white font-semibold">200+ homes</span> in the last year alone.
            </motion.p>

            {/* City selector + CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.38, ease: "easeOut" }}
              className="space-y-5 pt-1"
            >
              {/* City toggle */}
              <div>
                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-3">Select City</p>
                <div
                  role="group"
                  aria-label="Select city"
                  className="flex gap-1.5 p-1.5 w-full sm:w-fit rounded-2xl border border-white/[0.08] backdrop-blur-sm"
                  style={{ background: "rgba(255,255,255,0.04)" }}
                >
                  {cities.map((city) => (
                    <button
                      key={city}
                      onClick={() => setActiveCity(city)}
                      aria-pressed={activeCity === city}
                      className={`flex-1 sm:flex-none px-8 py-2.5 rounded-xl text-sm font-semibold transition-all duration-250 cursor-pointer ${
                        activeCity === city
                          ? "text-white shadow-lg"
                          : "text-slate-400 hover:text-slate-200"
                      }`}
                      style={
                        activeCity === city
                          ? { background: "linear-gradient(135deg, #ff6d33 0%, #e55d27 100%)", boxShadow: "0 4px 20px rgba(255,109,51,0.35)" }
                          : {}
                      }
                    >
                      {city}
                    </button>
                  ))}
                </div>
              </div>

              {/* Primary CTA only */}
              <a
                href="#services"
                className="group relative overflow-hidden block sm:inline-block text-center font-bold py-4 px-12 rounded-2xl text-base text-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: "linear-gradient(135deg, #ff6d33 0%, #e55d27 100%)",
                  boxShadow: "0 8px 32px rgba(255,109,51,0.30), 0 2px 8px rgba(255,109,51,0.15)",
                }}
              >
                <span className="relative z-10">Book An Appointment</span>
                <span
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-2xl"
                  style={{ background: "linear-gradient(135deg, #ff8c42 0%, #ff6d33 100%)" }}
                  aria-hidden="true"
                />
              </a>

              <p className="text-sm text-slate-500">
                Already a member?{" "}
                <span className="text-orange-400 font-semibold cursor-pointer hover:text-orange-300 transition-colors">
                  Login
                </span>
              </p>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex gap-8 pt-3 border-t border-white/[0.06]"
            >
              {trustBadges.map((b, i) => (
                <motion.div
                  key={b.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.08 }}
                >
                  <p className="text-xl font-black text-white">{b.value}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{b.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT — video card ── */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center lg:justify-end pb-10 lg:pb-0"
          >
            {/* Ambient glow behind card */}
            <div
              className="absolute inset-0 m-auto w-4/5 h-4/5 rounded-3xl blur-3xl opacity-[0.15]"
              style={{ background: "radial-gradient(circle, #ff6d33 0%, transparent 70%)" }}
              aria-hidden="true"
            />

            <div className="relative w-full max-w-[460px]">
              {/* Floating badge — top */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75, duration: 0.4 }}
                className="absolute -top-4 left-5 z-10 flex items-center gap-2 rounded-full px-4 py-1.5 border border-white/[0.12] backdrop-blur-md"
                style={{ background: "rgba(255,255,255,0.07)" }}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                <span className="text-white text-xs font-semibold">Live Guidance Available</span>
              </motion.div>

              {/* Video card — clean cutout, no text below */}
              <button
                onClick={() => setVideoOpen(true)}
                aria-label="Play the Propsoch guided homebuying program video"
                className="group relative w-full aspect-video rounded-3xl overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6d33] cursor-pointer"
                style={{
                  border: "1px solid rgba(255,255,255,0.10)",
                  boxShadow: "none",
                  transition: "box-shadow 0.35s ease, border-color 0.35s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.boxShadow =
                    "0 0 60px rgba(255,109,51,0.28), 0 0 120px rgba(255,109,51,0.12)";
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    "rgba(255,109,51,0.45)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    "rgba(255,255,255,0.10)";
                }}
              >
                <Image
                  src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                  alt="Propsoch Guided Homebuying Program video thumbnail"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 460px"
                  priority
                />
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0 transition-all duration-300"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(8,10,22,0.70) 0%, rgba(8,10,22,0.10) 45%, transparent 100%)",
                  }}
                />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative flex items-center justify-center">
                    <span
                      className="absolute w-20 h-20 rounded-full border border-white/25 animate-ping opacity-30"
                      aria-hidden="true"
                    />
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.93 }}
                      className="relative w-16 h-16 rounded-full flex items-center justify-center shadow-2xl"
                      style={{
                        background: "rgba(255,255,255,0.92)",
                        boxShadow: "0 4px 30px rgba(0,0,0,0.3)",
                      }}
                    >
                      <svg width="20" height="20" fill="#ff6d33" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </motion.span>
                  </div>
                </div>

                {/* Bottom label inside video */}
                <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between">
                  <span className="text-white text-sm font-semibold drop-shadow-md">
                    Guided Homebuying Program
                  </span>
                  <span
                    className="text-xs text-white/75 px-2.5 py-0.5 rounded-full backdrop-blur-sm"
                    style={{ background: "rgba(0,0,0,0.45)" }}
                  >
                    3:00
                  </span>
                </div>
              </button>

              {/* Floating info chip — bottom right */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.4 }}
                className="absolute -bottom-5 right-5 flex items-center gap-3 rounded-2xl px-4 py-3 border border-white/[0.10] backdrop-blur-xl"
                style={{ background: "rgba(10,13,28,0.85)" }}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(255,109,51,0.18)" }}
                >
                  <svg width="14" height="14" fill="#ff6d33" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white text-xs font-semibold">Watch how it works</p>
                  <p className="text-slate-400 text-[10px]">3 min · Free to watch</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* YouTube modal */}
      <AnimatePresence>
        {videoOpen && (
          <motion.div
            key="video-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center px-4"
            style={{ background: "rgba(8,10,22,0.92)" }}
            role="dialog"
            aria-modal="true"
            onClick={() => setVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-3xl aspect-video rounded-2xl overflow-hidden border border-white/10"
              style={{ boxShadow: "0 0 80px rgba(255,109,51,0.15), 0 25px 60px rgba(0,0,0,0.5)" }}
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
                title="Propsoch Guided Homebuying Program"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
              <button
                onClick={() => setVideoOpen(false)}
                aria-label="Close video"
                className="absolute top-3 right-3 w-9 h-9 text-white rounded-full flex items-center justify-center transition-colors z-10 cursor-pointer border border-white/10"
                style={{ background: "rgba(0,0,0,0.65)" }}
              >
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
