const stats = [
  { value: "2750+", label: "Hours of Advice" },
  { value: "520M+", label: "Sq. Feet Analyzed" },
  { value: "210+", label: "Partner Builders" },
  { value: "500+", label: "Projects Across Bangalore" },
];

export default function Stats() {
  return (
    <section aria-label="Key metrics" className="bg-white border-y border-gray-100 py-14 px-4 sm:px-6 lg:px-8">
      <p className="text-center text-sm text-gray-600 font-medium mb-10">
        Trusted by 1000+ intelligent homebuyers
      </p>

      <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-10">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center group">
            <p className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tighter transition-colors group-hover:text-[#ff6d33]">
              {stat.value}
            </p>
            <p className="text-sm text-gray-600 mt-2 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
