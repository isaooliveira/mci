"use client";

import { motion } from "framer-motion";
import SectionBadge from "./ui/SectionBadge";

const paragraphs = [
  "A gente sabe que conteúdo traz cliente. Que quem aparece vende. Que a consistência constrói a autoridade que o negócio precisa.",
  'Então você tenta criar. O mercado inteiro ensina gancho. Você aprende a parar o scroll. Mas gancho sem desenvolvimento não retém ninguém. Aquele miolo do conteúdo que faz a pessoa pensar "isso é pra mim"? Ninguém ensina isso.',
  "Aí você passa horas tentando descobrir como fechar o raciocínio, como fazer a ideia fazer sentido do começo ao fim. O dia vai embora. Mais uma semana sem postar o que planejou. Mais um mês de presença irregular.",
];

export default function ProblemSection() {
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
          <SectionBadge text="O PROBLEMA" />
        </motion.div>

        <div className="space-y-5">
          {paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 + i * 0.08 }}
              className="font-body text-[17px] leading-[1.7] text-white"
            >
              {p}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
          className="mt-8 p-6 rounded-sm"
          style={{
            background: "#111111",
            borderLeft: "3px solid #E16B31",
          }}
        >
          <p className="font-body text-[17px] leading-[1.7] text-white">
            Você tem ideias.{" "}
            <strong className="uppercase" style={{ color: "#E16B31" }}>
              Infinitas.
            </strong>{" "}
            <em>
              Mas o que falta é uma ferramenta que transforma isso em roteiro
              completo, com gancho e desenvolvimento, pronto para publicar.
            </em>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
