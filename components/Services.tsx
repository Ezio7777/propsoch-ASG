"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    label: "Home Loan Offers",
    description: "Best rates from 20+ banks",
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9.5L12 3l9 6.5V21H3V9.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 21v-6h6v6" />
      </svg>
    ),
  },
  {
    label: "Legal Due Diligence",
    description: "RERA & title verification",
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    label: "Tax Planning",
    description: "Save on 80C & stamp duty",
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7H6a2 2 0 00-2 2v9a2 2 0 002 2h9a2 2 0 002-2v-3M9 7h6m-6 0V5a2 2 0 012-2h2a2 2 0 012 2v2m-6 0h6" />
      </svg>
    ),
  },
  {
    label: "Quality Inspection",
    description: "Expert structural checks",
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    label: "Vastu Advisors",
    description: "Directional harmony checks",
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m8.66-9h-1M4.34 12h-1m15.07-6.07l-.7.7M6.34 17.66l-.7.7m12.02 0l-.7-.7M6.34 6.34l-.7-.7M12 8a4 4 0 100 8 4 4 0 000-8z" />
      </svg>
    ),
  },
  {
    label: "Interior Designers",
    description: "Move-in ready spaces",
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
  },
];

export default function Services() {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-60px" });
  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-40px" });

  return (
    <section id="services" aria-labelledby="services-heading" className="bg-gray-50/70 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <p className="text-orange-700 text-sm font-semibold mb-3">
            That&apos;s not all, we&apos;re really with you every step of the way
          </p>
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl font-bold text-gray-900 max-w-2xl mx-auto leading-snug"
          >
            From home loans, legal, taxes, interiors to printing housewarming
            invites — we&apos;ve got you covered.
          </h2>
        </motion.div>

        <ul role="list" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {services.map((service, i) => (
            <ServiceCard key={service.label} service={service} index={i} />
          ))}
        </ul>

        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0, y: 24 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-100 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <p className="text-xl font-bold text-gray-900 max-w-md leading-snug text-center sm:text-left">
            All this &amp; a lot more, for your peace of mind.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <span className="border-2 border-gray-900 text-gray-900 font-semibold px-6 py-3 rounded-xl text-center whitespace-nowrap cursor-pointer hover:bg-gray-900 hover:text-white transition-all duration-150">
              See Sample Report
            </span>
            <a
              href="#"
              className="bg-[#ff6d33] hover:bg-[#e55d27] text-white font-semibold px-6 py-3 rounded-xl transition-colors duration-150 text-center whitespace-nowrap cursor-pointer"
            >
              Book An Appointment
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, y: 24, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.45, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="bg-white rounded-2xl p-5 flex flex-col items-center gap-3 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer h-full">
        <div className="text-[#ff6d33]">{service.icon}</div>
        <p className="text-xs font-semibold text-gray-800 text-center leading-tight">{service.label}</p>
        <p className="text-xs text-gray-600 text-center leading-tight hidden sm:block">{service.description}</p>
      </div>
    </motion.li>
  );
}
