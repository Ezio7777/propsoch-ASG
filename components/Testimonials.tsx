"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Vivek Lochdi",
    role: "CEO @ Pincode",
    initials: "VL",
    color: "from-purple-500 to-violet-600",
    quote:
      "Ashish simplifies every step of home buying and is exactly the person you want in your corner when making the biggest financial decision of your life. Deeply knowledgeable, patient, and honest.",
  },
  {
    name: "Bhavana Rao Phavid",
    role: "Managing Director @ Accenture",
    initials: "BP",
    color: "from-rose-500 to-pink-600",
    quote:
      "Excellent service and decision making support! The team genuinely understands what buyers need and guides you through every step without any pressure. Highly recommend Propsoch to anyone serious.",
  },
  {
    name: "Abhishek Bhadra",
    role: "Head of Research @ MagicBricks",
    initials: "AB",
    color: "from-blue-500 to-cyan-600",
    quote:
      "This is exactly the kind of service the market needed. As dynamics evolve rapidly, buyers deserve the comprehensive insights Propsoch delivers. A game-changer for informed homebuying in India.",
  },
  {
    name: "Priya Menon",
    role: "Senior VP @ HDFC Bank",
    initials: "PM",
    color: "from-emerald-500 to-teal-600",
    quote:
      "After months of searching alone, Propsoch found me the perfect home in just 3 visits. Their legal due diligence saved me from a property with disputed ownership. Absolute lifesavers — truly.",
  },
  {
    name: "Rohan Kapoor",
    role: "Founder @ TechVenture Labs",
    initials: "RK",
    color: "from-amber-500 to-orange-600",
    quote:
      "The negotiation support alone saved me ₹18 lakhs on my Whitefield flat. These guys know the market inside out. Worth every rupee, and I've already referred three colleagues who are equally thrilled.",
  },
  {
    name: "Ananya Sharma",
    role: "Director @ Deloitte India",
    initials: "AS",
    color: "from-indigo-500 to-blue-600",
    quote:
      "As a first-time buyer, I was completely lost. Propsoch's experts held my hand through RERA checks, loan processing, and interior planning. Their guided program is a genuine game-changer.",
  },
];

const TOTAL = testimonials.length;

export default function Testimonials() {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-60px" });

  // current = index of the CENTER card on desktop
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const dragStart = useRef(0);
  const isDragging = useRef(false);

  const go = useCallback(
    (delta: 1 | -1) => {
      setDirection(delta);
      setCurrent((c) => (c + delta + TOTAL) % TOTAL);
    },
    []
  );

  // Auto-play
  useEffect(() => {
    const id = setInterval(() => go(1), 5500);
    return () => clearInterval(id);
  }, [go]);

  // Touch
  const onTouchStart = (e: React.TouchEvent) => { dragStart.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    const d = dragStart.current - e.changedTouches[0].clientX;
    if (Math.abs(d) > 45) go(d > 0 ? 1 : -1);
  };

  // Mouse drag
  const onMouseDown = (e: React.MouseEvent) => { dragStart.current = e.clientX; isDragging.current = true; };
  const onMouseUp = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const d = dragStart.current - e.clientX;
    if (Math.abs(d) > 45) go(d > 0 ? 1 : -1);
  };

  // Desktop: show left / center / right
  const leftIdx  = (current - 1 + TOTAL) % TOTAL;
  const rightIdx = (current + 1) % TOTAL;

  const slideVariants = {
    enter: (d: number) => ({ x: d > 0 ? 80 : -80, opacity: 0, scale: 0.94 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit:  (d: number) => ({ x: d > 0 ? -80 : 80, opacity: 0, scale: 0.94 }),
  };

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #080a16 0%, #0c0f1e 100%)" }}
    >
      <div className="max-w-6xl mx-auto">

        {/* ── Heading ── */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 border border-white/10 text-orange-300 text-xs font-semibold px-4 py-2 rounded-full tracking-wide mb-5"
            style={{ background: "rgba(255,255,255,0.04)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff6d33]" aria-hidden="true" />
            What Buyers Say
          </span>
          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl font-black text-white max-w-3xl mx-auto leading-snug"
          >
            1000+ homebuyers trusted us with{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #ff8c42 0%, #ff6d33 50%, #f59e0b 100%)" }}
            >
              their biggest decision
            </span>
          </h2>
        </motion.div>

        {/* ── Desktop carousel (3-up, center = active) ── */}
        <div
          className="hidden md:block"
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseLeave={() => { isDragging.current = false; }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <AnimatePresence mode="popLayout" initial={false} custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-3 gap-5 items-stretch select-none"
            >
              {/* Left — dimmed side card */}
              <div className="flex">
                <TestiCard t={testimonials[leftIdx]} role="side" />
              </div>

              {/* Center — active/hero card */}
              <div className="flex">
                <TestiCard t={testimonials[current]} role="center" />
              </div>

              {/* Right — dimmed side card */}
              <div className="flex">
                <TestiCard t={testimonials[rightIdx]} role="side" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Mobile carousel (1-up) ── */}
        <div
          className="md:hidden"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={{
                enter: (d: number) => ({ x: d > 0 ? "55%" : "-55%", opacity: 0 }),
                center: { x: 0, opacity: 1 },
                exit:  (d: number) => ({ x: d > 0 ? "-55%" : "55%", opacity: 0 }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <TestiCard t={testimonials[current]} role="center" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Controls ── */}
        <div className="flex items-center justify-center gap-5 mt-10">
          <button
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className="w-11 h-11 rounded-full flex items-center justify-center text-white transition-all duration-200 cursor-pointer border border-white/10 hover:border-[#ff6d33]/50 hover:text-[#ff6d33]"
            style={{ background: "rgba(255,255,255,0.04)" }}
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Pill dots */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                aria-label={`Go to testimonial ${i + 1}`}
                className="rounded-full transition-all duration-350 cursor-pointer"
                style={{
                  width: i === current ? 24 : 8,
                  height: 8,
                  background: i === current ? "#ff6d33" : "rgba(255,255,255,0.18)",
                }}
              />
            ))}
          </div>

          <button
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className="w-11 h-11 rounded-full flex items-center justify-center text-white transition-all duration-200 cursor-pointer border border-white/10 hover:border-[#ff6d33]/50 hover:text-[#ff6d33]"
            style={{ background: "rgba(255,255,255,0.04)" }}
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

/* ── Card component — role drives all visual differences ── */
function TestiCard({
  t,
  role,
}: {
  t: (typeof testimonials)[0];
  role: "center" | "side";
}) {
  const isCenter = role === "center";

  return (
    <article
      className="flex flex-col w-full rounded-2xl transition-all duration-500 cursor-default group"
      style={{
        minHeight: 300,
        padding: isCenter ? "1.75rem" : "1.5rem",
        background: isCenter
          ? "linear-gradient(145deg, rgba(255,109,51,0.10) 0%, rgba(255,255,255,0.06) 100%)"
          : "rgba(255,255,255,0.03)",
        border: isCenter
          ? "1px solid rgba(255,109,51,0.30)"
          : "1px solid rgba(255,255,255,0.07)",
        boxShadow: isCenter
          ? "0 0 50px rgba(255,109,51,0.12), 0 8px 32px rgba(0,0,0,0.3)"
          : "none",
        transform: isCenter ? "scale(1.04)" : "scale(0.97)",
        opacity: isCenter ? 1 : 0.65,
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.opacity = "1";
        el.style.transform = isCenter ? "scale(1.06)" : "scale(1.00)";
        el.style.boxShadow = isCenter
          ? "0 0 70px rgba(255,109,51,0.20), 0 12px 40px rgba(0,0,0,0.35)"
          : "0 0 30px rgba(255,109,51,0.08), 0 8px 24px rgba(0,0,0,0.25)";
        el.style.borderColor = isCenter
          ? "rgba(255,109,51,0.50)"
          : "rgba(255,255,255,0.14)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.opacity = isCenter ? "1" : "0.65";
        el.style.transform = isCenter ? "scale(1.04)" : "scale(0.97)";
        el.style.boxShadow = isCenter
          ? "0 0 50px rgba(255,109,51,0.12), 0 8px 32px rgba(0,0,0,0.3)"
          : "none";
        el.style.borderColor = isCenter
          ? "rgba(255,109,51,0.30)"
          : "rgba(255,255,255,0.07)";
      }}
    >
      {/* Stars */}
      <div className="flex gap-1 mb-4 flex-shrink-0" aria-label="5 stars">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            width={isCenter ? 13 : 11}
            height={isCenter ? 13 : 11}
            fill="#ff6d33"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>

      {/* Quote — line-clamp keeps equal height */}
      <blockquote
        className="flex-1 leading-relaxed text-slate-300 overflow-hidden"
        style={{
          fontSize: isCenter ? "0.9rem" : "0.8rem",
          display: "-webkit-box",
          WebkitLineClamp: 5,
          WebkitBoxOrient: "vertical",
        }}
      >
        &ldquo;{t.quote}&rdquo;
      </blockquote>

      {/* Author */}
      <footer
        className="flex items-center gap-3 flex-shrink-0 mt-5 pt-4"
        style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
      >
        <div
          className={`rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center font-bold text-white flex-shrink-0 shadow-lg`}
          style={{ width: isCenter ? 40 : 34, height: isCenter ? 40 : 34, fontSize: isCenter ? "0.75rem" : "0.65rem" }}
        >
          {t.initials}
        </div>
        <div>
          <p className="font-semibold text-white" style={{ fontSize: isCenter ? "0.875rem" : "0.78rem" }}>
            {t.name}
          </p>
          <p className="text-orange-400 font-medium" style={{ fontSize: isCenter ? "0.75rem" : "0.68rem" }}>
            {t.role}
          </p>
        </div>
      </footer>
    </article>
  );
}
