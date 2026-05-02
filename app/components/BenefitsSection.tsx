"use client";

import { motion } from "framer-motion";
import SectionBadge from "./ui/SectionBadge";
import BenefitItem from "./ui/BenefitItem";
import CtaButton from "./ui/CtaButton";

const benefits = [
  {
    title: "1 ideia vira 10 ângulos em segundos.",
    description: "Você escolhe o que faz sentido e segue.",
  },
  {
    title: "Roteiro completo em menos de 5 minutos.",
    description:
      "Gancho, desenvolvimento, CTA, legenda e hashtags. Nada para completar, nada para inventar.",
  },
  {
    title: "30 conteúdos prontos em uma tarde.",
    description: "Grava em lote, programa a semana inteira de uma vez.",
  },
  {
    title: "O roteiro sai sem cheiro de IA.",
    description:
      'A ferramenta já vem configurada com as regras que eliminam os vícios de IA que fazem o seguidor pensar "isso foi escrito por robô."',
  },
  {
    title: "Funciona com qualquer tema, qualquer dia.",
    description: "Com ideia organizada ou não, inspirada ou não.",
  },
  {
    title: "Instala uma vez. Usa para sempre.",
    description: "Sem reconfigurar, sem aprender nada novo toda vez.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="px-5 py-20 md:py-28">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-4"
        >
          <SectionBadge text="O QUE MUDA NO DIA A DIA" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="font-display text-[36px] md:text-[56px] uppercase text-white leading-[0.93] mb-10"
        >
          Você joga a ideia.{" "}
          <span style={{ color: "#E16B31" }}>A máquina faz o resto:</span>
        </motion.h2>

        <div className="space-y-3">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 + i * 0.07 }}
            >
              <BenefitItem title={b.title} description={b.description} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.55 }}
          className="mt-10"
        >
          <CtaButton />
          <p
            className="font-body text-center text-[13px] mt-3"
            style={{ color: "#A89990" }}
          >
            Qualquer nicho. Qualquer formato. Plano gratuito do Claude já resolve.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
