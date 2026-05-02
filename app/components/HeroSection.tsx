"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import CtaButton from "./ui/CtaButton";
import SectionBadge from "./ui/SectionBadge";

export default function HeroSection() {
  return (
    <section className="relative pb-20 md:pb-28 overflow-hidden">
      {/* Logo — centered, above image */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.0, 0.0, 0.2, 1] }}
        className="flex justify-center pt-5 md:pt-6 px-5"
      >
        <Image
          src="/logo-maquina-conteudo.svg"
          alt="Máquina de Conteúdo Infinito"
          width={120}
          height={92}
          className="w-[100px] md:w-[120px] h-auto"
          priority
        />
      </motion.div>

      {/* Hero image — full width, blends into bg */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0, ease: [0.0, 0.0, 0.2, 1], delay: 0.05 }}
        className="relative w-full mt-2"
      >
        <Image
          src="/bg-webs.webp"
          alt="Máquina de Conteúdo Infinito — processo completo de criação"
          width={1920}
          height={1080}
          className="w-full h-auto"
          priority
        />
        <div
          className="absolute inset-x-0 top-0 h-16 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, #090909, transparent)" }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-40 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, #090909)" }}
        />
      </motion.div>

      {/* Text content — centered, below image */}
      <div className="max-w-3xl mx-auto px-5 mt-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.0, 0.0, 0.2, 1], delay: 0.2 }}
          className="mb-4 flex justify-center"
        >
          <SectionBadge text="ACESSO IMEDIATO" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.0, 0.0, 0.2, 1], delay: 0.25 }}
          className="font-display text-[40px] md:text-[64px] leading-[0.93] uppercase text-white mb-8 text-center"
        >
          A ferramenta que transforma uma única ideia solta em{" "}
          <span style={{ color: "#E16B31" }}>10 conteúdos</span> com ganchos,
          roteiro e legendas em menos de 5 minutos
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.0, 0.0, 0.2, 1], delay: 0.3 }}
          className="mb-8"
        >
          <p
            className="font-body text-[18px] md:text-[20px] leading-[1.7] mb-5 text-center"
            style={{ color: "#A89990" }}
          >
            Crie conteúdos que conectam e retém a audiência, com facilidade,
            profundidade e velocidade, sem os vícios de linguagem de IA e sem
            precisar aprender um novo hack do momento.
          </p>
          <ul className="space-y-2">
            {[
              "1 ideia vira 10 ângulos de conteúdo diferentes em segundos",
              "Funciona para Reels, carrosséis e stories, qualquer formato",
              "Roteiro pronto: hook, desenvolvimento, CTA, legenda e hashtags",
              "Instala em 3 minutos. Funciona no celular ou computador.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="font-body text-[15px] font-bold mt-0.5 flex-shrink-0"
                  style={{ color: "#E16B31" }}
                >
                  ✓
                </span>
                <span
                  className="font-body text-[16px] leading-relaxed"
                  style={{ color: "#A89990" }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.0, 0.0, 0.2, 1], delay: 0.35 }}
        >
          <CtaButton />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.0, 0.0, 0.2, 1], delay: 0.4 }}
          className="font-body text-center text-[13px] mt-3"
          style={{ color: "#A89990" }}
        >
          Acesso imediato. Você instala hoje e usa hoje.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.0, 0.0, 0.2, 1], delay: 0.45 }}
          className="flex items-center justify-center gap-x-5 gap-y-2 mt-6 flex-wrap font-body text-[13px]"
          style={{ color: "#A89990" }}
        >
          <span>🔒 Pagamento seguro</span>
          <span className="hidden sm:inline opacity-40">·</span>
          <span>⚡ Acesso imediato</span>
          <span className="hidden sm:inline opacity-40">·</span>
          <span>↩️ Garantia 7 dias</span>
        </motion.div>
      </div>
    </section>
  );
}
