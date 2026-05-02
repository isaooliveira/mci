export default function SectionBadge({ text }: { text: string }) {
  return (
    <div className="inline-flex max-w-full items-center">
      <span
        className="font-label text-[11px] uppercase tracking-[0.12em] rounded-sm px-[10px] py-1 text-center whitespace-normal"
        style={{ color: "#E16B31", border: "1px solid #832C0C" }}
      >
        {text}
      </span>
    </div>
  );
}
