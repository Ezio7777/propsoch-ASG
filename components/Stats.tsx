"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "2750+", label: "Hours of Advice" },
  { value: "520M+", label: "Sq. Feet Analyzed" },
  { value: "210+", label: "Partner Builders" },
  { value: "500+", label: "Projects Across Bangalore" },
];

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section aria-label="Key metrics" className="relative bg-white border-b border-gray-100 py-14 px-4 sm:px-6 lg:px-8">
      <motion.p
        ref={ref}
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.45 }}
        className="text-center text-sm text-gray-600 font-medium mb-10"
      >
        Trusted by 1000+ intelligent homebuyers
      </motion.p>
      <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-10">
        {stats.map((stat, i) => (
          <StatCard key={stat.label} stat={stat} index={i} />
        ))}
      </div>
    </section>
  );
}

function StatCard({ stat, index }: { stat: { value: string; label: string }; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="text-center group"
    >
      <p className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tighter transition-colors group-hover:text-[#ff6d33]">
        {stat.value}
      </p>
      <p className="text-sm text-gray-600 mt-2 font-medium">{stat.label}</p>
    </motion.div>
  );
}
