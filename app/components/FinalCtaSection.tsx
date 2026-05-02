"use client";

import { motion } from "framer-motion";
import SectionDivider from "./ui/SectionDivider";
import CtaButton from "./ui/CtaButton";
import { PAGE_CONFIG } from "@/config/page";

const closingParagraphs = [
  "Toda semana a gente olha pro feed e pensa: preciso postar mais.",
  "Toda semana começa, some no meio do caminho, adia.",
  "O conteúdo que não saiu essa semana foi uma venda que não aconteceu. Um seguidor que não chegou. Uma autoridade que ficou represada dentro da sua cabeça.",
  "Você já conhece o ChatGPT. O Claude você aprende em 5 minutos. O processo você instala em 10. O primeiro roteiro sai antes do fim do dia.",
];

export default function FinalCtaSection() {
  return (
    <section
      className="px-5 py-20 md:py-28 text-center"
      style={{
        background: "radial-gradient(ellipse at 50% 50%, #1A0A05 0%, #090909 70%)",
      }}
    >
      <div className="max-w-3xl mx-auto">
        <div className="space-y-5 mb-10">
          {closingParagraphs.map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
              className="font-body text-[18px] leading-[1.8] text-white"
            >
              {text}
            </motion.p>
          ))}
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.35 }}
          className="font-display text-[40px] md:text-[56px] uppercase leading-[0.93] mb-8"
          style={{ color: "#E16B31" }}
        >
          Por R$ 67, você instala hoje e cria hoje.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.45 }}
        >
          <CtaButton text={PAGE_CONFIG.ctaText} size="large" />
          <p className="font-body text-[13px] mt-3" style={{ color: "#A89990" }}>
            Acesso imediato. Garantia de 7 dias. Paga uma vez, usa para sempre.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
          className="mt-12"
        >
          <SectionDivider />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.55 }}
          className="font-body text-[16px] italic leading-relaxed mt-10"
          style={{ color: "#A89990" }}
        >
          <strong className="not-italic" style={{ color: "#ffffff" }}>P.S.</strong>{" "}
          Você não está comprando mais uma coisa para aprender. Está comprando
          uma ferramenta que faz o trabalho pesado por você. Esse você instala
          hoje e já cria hoje.
        </motion.p>
      </div>
    </section>
  );
}
