"use client";

import { useState } from "react";
import Image from "next/image";

const cities = ["Bangalore", "Mumbai"] as const;
type City = (typeof cities)[number];

const VIDEO_ID = "RqBYQJRqUXs";

export default function Hero() {
  const [activeCity, setActiveCity] = useState<City>("Bangalore");
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative bg-gradient-to-br from-orange-50 via-white to-amber-50/30 pt-16 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-orange-100 rounded-full opacity-40 blur-3xl -translate-y-1/2 translate-x-1/3"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-72 h-72 bg-amber-100 rounded-full opacity-30 blur-3xl translate-y-1/3 -translate-x-1/4"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="space-y-7">
          <p className="text-gray-500 text-sm font-medium tracking-wide">
            Stop wasting countless weekends on irrelevant visits
          </p>

          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl xl:text-6xl font-black text-gray-900 leading-[1.1] tracking-tight"
          >
            Visit curated homes, negotiate smarter{" "}
            <span className="text-[#ff6d33]">&amp; buy intelligently.</span>
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
            Get end-to-end guidance from property wizards who&apos;ve helped
            intelligent homebuyers like you buy 200+ homes in the last year alone.
          </p>

          <div className="space-y-4 pt-2">
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-2">Select City</p>
              <div
                role="group"
                aria-label="Select city"
                className="flex gap-1 p-1 bg-gray-100 rounded-xl w-fit"
              >
                {cities.map((city) => (
                  <button
                    key={city}
                    onClick={() => setActiveCity(city)}
                    aria-pressed={activeCity === city}
                    className={`px-7 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                      activeCity === city
                        ? "bg-white text-[#ff6d33] shadow-sm"
                        : "text-gray-600 hover:text-gray-800"
                    }`}
                  >
                    {city}
                  </button>
                ))}
              </div>
            </div>

            <a
              href="#services"
              className="block w-full sm:w-fit bg-[#ff6d33] hover:bg-[#e55d27] active:scale-[0.98] text-white font-semibold text-center py-4 px-10 rounded-xl transition-all duration-150 text-base shadow-lg shadow-orange-200"
            >
              Book An Appointment
            </a>

            <p className="text-sm text-gray-600">
              Already a member?{" "}
              <span className="text-orange-700 font-semibold">Login</span>
            </p>
          </div>
        </div>

        {/* YouTube video card */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md">
            <div className="absolute -top-5 -right-5 w-12 h-12 text-yellow-400" aria-hidden="true">
              <svg viewBox="0 0 48 48" fill="currentColor">
                <path d="M24 4l4.5 14H43l-11.5 8.5 4.5 14L24 32l-12 8.5 4.5-14L5 18h14.5z" />
              </svg>
            </div>
            <div className="absolute -top-2 right-10 w-6 h-6 text-yellow-300" aria-hidden="true">
              <svg viewBox="0 0 48 48" fill="currentColor">
                <path d="M24 4l4.5 14H43l-11.5 8.5 4.5 14L24 32l-12 8.5 4.5-14L5 18h14.5z" />
              </svg>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl shadow-orange-100/50 overflow-hidden border border-orange-100/50">
              {/* YouTube thumbnail with play button overlay */}
              <button
                onClick={() => setVideoOpen(true)}
                aria-label="Play the Propsoch guided homebuying program video"
                className="relative w-full aspect-video overflow-hidden group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6d33] focus-visible:ring-offset-2"
              >
                <Image
                  src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                  alt="Propsoch Guided Homebuying Program video thumbnail"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 448px"
                  priority
                />
                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-200" />
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 active:scale-95 transition-transform duration-200">
                    <svg width="22" height="22" fill="#ff6d33" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </button>

              <div className="px-5 py-4 bg-white">
                <p className="text-sm font-semibold text-gray-800">Watch how we guide homebuyers</p>
                <p className="text-xs text-gray-600 mt-0.5">3 min overview</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* YouTube modal */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4"
          role="dialog"
          aria-modal="true"
          aria-label="Propsoch video"
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-3xl aspect-video rounded-2xl overflow-hidden shadow-2xl"
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
              className="absolute top-3 right-3 w-9 h-9 bg-black/60 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-colors z-10"
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
