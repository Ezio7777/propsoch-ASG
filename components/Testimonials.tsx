const testimonials = [
  {
    name: "Vivek Lochdi",
    role: "CEO @ Pincode",
    initials: "VL",
    avatarClass: "bg-purple-100 text-purple-700",
    quote:
      "I found Ashish very helpful and knowledgeable, he simplifies all the steps of home buying, someone you want in your corner.",
  },
  {
    name: "Bhavana Rao Phavid",
    role: "Managing Director @ Accenture",
    initials: "BP",
    avatarClass: "bg-rose-100 text-rose-700",
    quote:
      "Excellent service and decision making support! The team genuinely understands what buyers need and guides you through every step without any pressure.",
  },
  {
    name: "Abhishek Bhadra",
    role: "Head of Research @ MagicBricks",
    initials: "AB",
    avatarClass: "bg-blue-100 text-blue-700",
    quote:
      "Excellent job. I believe this is the perfect time for such services — as market dynamics evolve rapidly, customers deserve the kind of comprehensive insights Propsoch delivers.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" aria-labelledby="testimonials-heading" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-orange-700 text-sm font-semibold mb-3">
            Hear from your fellow homeowners.
          </p>
          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl font-bold text-gray-900 max-w-3xl mx-auto leading-snug"
          >
            1000+ intelligent homebuyers trusted us with their biggest life
            decision because we helped them{" "}
            <em className="not-italic text-[#ff6d33]">know if</em> it was the
            right one.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="bg-gray-50 rounded-2xl p-7 flex flex-col gap-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
            >
              <span className="text-[#ff6d33] text-5xl font-black leading-none select-none" aria-hidden="true">
                &ldquo;
              </span>

              <blockquote className="text-gray-700 leading-relaxed text-sm flex-1 -mt-4">
                {t.quote}
              </blockquote>

              <footer className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${t.avatarClass}`}
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-orange-700 text-xs font-medium">{t.role}</p>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
