"use client";

import { motion } from "framer-motion";
import SectionBadge from "./ui/SectionBadge";
import TestimonialCard from "./ui/TestimonialCard";

// TODO: inserir depoimentos reais
const testimonials = [
  {
    quote:
      "Eu usava o ChatGPT todo dia e continuava travando. Não era a ferramenta, era que eu não sabia como usar direito. Instalei o processo, joguei um tema, e em 6 minutos tava com 4 roteiros na mão. Gravei tudo no mesmo dia.",
    name: "[Nome]",
    niche: "[nicho]",
  },
  {
    quote:
      "Parece idiota falar, mas eu ficava 1 hora criando um conteúdo. Agora faço 8 em uma hora. Minha frequência mudou completamente e as pessoas começaram a me perguntar como eu posta tanto.",
    name: "[Nome]",
    niche: "[nicho]",
  },
];

export default function ProofSection() {
  return (
    <section className="px-5 py-20 md:py-28">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-4"
        >
          <SectionBadge text="RESULTADOS" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="font-display text-[36px] md:text-[56px] uppercase text-white leading-[0.93] mb-10"
        >
          Quem já <span style={{ color: "#E16B31" }}>usa</span>
        </motion.h2>

        <div className="space-y-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 + i * 0.15 }}
            >
              <TestimonialCard {...t} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
