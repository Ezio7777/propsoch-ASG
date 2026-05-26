"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const blogPosts = [
  {
    slug: "2025-bangalore-real-estate",
    category: "Blog",
    title: "2025 Bangalore Real Estate",
    description: "Explore micro-markets, price trends & upcoming hotspots.",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=75",
    alt: "Modern apartment building in Bangalore",
  },
  {
    slug: "home-buying-checklist",
    category: "Blog",
    title: "Home Buying Checklist",
    description: "Navigate the home buying journey with confidence — from property search to final paperwork.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=75",
    alt: "Home buying checklist with pen and documents",
  },
  {
    slug: "home-buying-guide-101",
    category: "Blog",
    title: "Home Buying Guide 101",
    description: "Track your purchase journey with an essential checklist of documents, inspections, and key milestones.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=75",
    alt: "Real estate agent showing property to couple",
  },
];

export default function Resources() {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-60px" });
  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-40px" });

  return (
    <section id="resources" aria-labelledby="resources-heading" className="bg-gray-50/70 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <p className="text-orange-700 text-sm font-semibold mb-3">
            Join an exclusive club of empowered homebuyers
          </p>
          <h2 id="resources-heading" className="text-3xl sm:text-4xl font-bold text-gray-900">
            Empower yourself with our guides, hacks &amp; resources
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {blogPosts.map((post, i) => (
            <BlogCard key={post.slug} post={post} index={i} />
          ))}
        </div>

        {/* Community CTA */}
        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0, y: 28 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100/50 rounded-3xl p-10 text-center border border-orange-100"
        >
          <p className="text-purple-700 text-sm font-semibold mb-2 tracking-wide uppercase">Community</p>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Hometrust Collective</h3>
          <p className="text-gray-600 text-sm max-w-sm mx-auto mb-7 leading-relaxed">
            An exclusive community of buyers, owners &amp; experts who help each other stay updated about the market.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <span className="flex items-center justify-center gap-2.5 bg-gray-900 text-white font-semibold px-7 py-3.5 rounded-xl cursor-pointer hover:bg-gray-800 transition-colors duration-150">
              <WhatsAppIcon /> Join Bangalore
            </span>
            <span className="flex items-center justify-center gap-2.5 bg-gray-900 text-white font-semibold px-7 py-3.5 rounded-xl cursor-pointer hover:bg-gray-800 transition-colors duration-150">
              <WhatsAppIcon /> Join Mumbai
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function BlogCard({ post, index }: { post: typeof blogPosts[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group cursor-pointer"
    >
      <div className="relative w-full aspect-video overflow-hidden">
        <Image
          src={post.image}
          alt={post.alt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <span className="text-orange-700 text-xs font-semibold uppercase tracking-wide">{post.category}</span>
        <h3 className="font-bold text-gray-900 mt-1.5 mb-2">{post.title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{post.description}</p>
      </div>
    </motion.article>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
