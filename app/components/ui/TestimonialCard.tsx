interface TestimonialCardProps {
  quote: string;
  name: string;
  niche: string;
}

export default function TestimonialCard({ quote, name, niche }: TestimonialCardProps) {
  return (
    <div
      className="p-6 rounded-sm relative overflow-hidden"
      style={{ background: "#111111", border: "1px solid #2A1A14" }}
    >
      <span
        className="font-display text-[64px] leading-none absolute top-2 left-5 select-none pointer-events-none"
        style={{ color: "#E16B31", opacity: 0.35 }}
        aria-hidden="true"
      >
        ❝
      </span>
      <div className="pt-10">
        <p className="font-body text-[16px] italic text-white leading-relaxed">
          {quote}
        </p>
        <p className="font-body text-[14px] mt-4" style={{ color: "#A89990" }}>
          — {name}, {niche}
        </p>
      </div>
    </div>
  );
}
