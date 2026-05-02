import Image from "next/image";

export default function FooterSection() {
  return (
    <footer
      className="px-5 py-12 md:py-16 pb-28 lg:pb-16"
      style={{
        borderTop: "1px solid #2A1A14",
        background: "#090909",
      }}
    >
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-6">
        <Image
          src="/logo-algoritma.webp"
          alt="Algoritma Digital"
          width={150}
          height={45}
          className="w-[150px] max-w-full h-auto"
          sizes="150px"
        />
        <p
          className="font-body text-[13px] md:text-[14px] leading-relaxed"
          style={{ color: "#A89990" }}
        >
          Copyright © 2026 – Todos os direitos reservados a Algoritma Digital®
        </p>
      </div>
    </footer>
  );
}
