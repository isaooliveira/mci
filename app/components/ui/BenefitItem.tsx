interface BenefitItemProps {
  title: string;
  description: string;
}

export default function BenefitItem({ title, description }: BenefitItemProps) {
  return (
    <div
      className="flex gap-4 p-5 rounded-sm"
      style={{
        background: "#111111",
        border: "1px solid #2A1A14",
        borderLeft: "3px solid #E16B31",
      }}
    >
      <div className="flex-shrink-0 mt-0.5">
        <div
          className="w-6 h-6 rounded-full flex items-center justify-center"
          style={{ background: "#E16B31" }}
        >
          <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
            <path
              d="M1 5L4.5 8.5L11 1.5"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div>
        <p className="font-body text-[17px] font-bold text-white leading-snug">
          {title}
        </p>
        <p
          className="font-body text-[15px] mt-1 leading-relaxed"
          style={{ color: "#A89990" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
