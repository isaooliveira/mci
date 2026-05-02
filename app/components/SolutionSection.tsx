"use client";

import { motion } from "framer-motion";
import SectionBadge from "./ui/SectionBadge";

const steps = [
  {
    number: "01",
    title: "Você joga qualquer ideia solta",
    copy: '"Quero falar sobre procrastinação." "Minha cliente passou por isso." "Vi um conselho horrível semana passada e quero rebater." Qualquer coisa. Não precisa estar organizada.',
    highlight: false,
  },
  {
    number: "02",
    title: "A máquina devolve 10 ângulos diferentes",
    copy: "10 formas distintas de entrar nesse tema. Você escolhe o que faz sentido para o momento e gera a tese: o argumento central, a virada, a lógica que vai fazer a pessoa parar de rolar.",
    highlight: false,
  },
  {
    number: "03",
    title: "Sai o roteiro completo",
    copy: "Gancho de texto. Gancho falado. Desenvolvimento em camadas, aquele miolo que retém. CTA. Legenda. Hashtags. Pronto para publicar.",
    highlight: true,
  },
];

export default function SolutionSection() {
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
          <SectionBadge text="A MÁQUINA DE CONTEÚDO INFINITO" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="font-display text-[36px] md:text-[56px] uppercase text-white leading-[0.93] mb-8"
        >
          Uma configuração. Uma vez.{" "}
          <span style={{ color: "#E16B31" }}>Para sempre.</span>
        </motion.h2>

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
          className="p-6 rounded-lg mb-10"
          style={{
            background: "linear-gradient(135deg, #111111, #1A0F0A)",
            border: "1px solid #832C0C",
          }}
        >
          <div className="flex items-start gap-4">
            <span className="text-xl flex-shrink-0 mt-0.5" style={{ color: "#E16B31" }}>
              ✦
            </span>
            <p className="font-body text-[16px] leading-relaxed text-white">
              3 passos simples, você instala uma vez e usa para sempre.
            </p>
          </div>
        </motion.div>

        {/* 3 steps */}
        <div className="space-y-0">
          {steps.map((step, i) => (
            <div key={step.number}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 + i * 0.1 }}
                className="p-6 rounded-sm relative"
                style={{
                  background: "#111111",
                  border: "1px solid #2A1A14",
                  ...(step.highlight ? { borderLeft: "2px solid #E16B31" } : {}),
                }}
              >
                <span
                  className="font-display text-[48px] leading-none absolute top-3 right-4 select-none pointer-events-none"
                  style={{ color: "#E16B31", opacity: 0.25 }}
                  aria-hidden="true"
                >
                  {step.number}
                </span>
                <h3 className="font-display text-[24px] uppercase text-white mb-3 pr-14 leading-tight">
                  {step.title}
                </h3>
                <p className="font-body text-[16px] leading-relaxed" style={{ color: "#A89990" }}>
                  {step.copy}
                </p>
              </motion.div>
              {i < steps.length - 1 && (
                <div className="w-px h-5 mx-auto" style={{ background: "#2A1A14" }} />
              )}
            </div>
          ))}
        </div>

        {/* Closing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
          className="mt-10 py-8 text-center"
          style={{
            borderTop: "1px solid #2A1A14",
            borderBottom: "1px solid #2A1A14",
          }}
        >
          <p className="font-body text-[18px] italic leading-[1.8] text-white">
            Da ideia ao roteiro: menos de 5 minutos. Repete o processo, mais 5
            minutos, mais um conteúdo.
            <br />
            Em poucas horas, a gente chega a{" "}
            <span style={{ color: "#E16B31" }}>
              30 conteúdos, 1 por dia, todos os dias.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
