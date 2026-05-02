"use client";

import { motion } from "framer-motion";
import SectionDivider from "./ui/SectionDivider";
import CtaButton from "./ui/CtaButton";
import { PAGE_CONFIG } from "@/config/page";

const items = [
  {
    icon: "⚙️",
    title: "A Máquina de Conteúdo Infinito",
    description:
      "A ferramenta completa pra instalar no seu Claude. Em 3 passos: você joga a ideia, escolhe o ângulo, sai o roteiro. Funciona para Reels, carrosséis, stories, posts de texto. Qualquer formato.",
  },
  {
    icon: "📖",
    title: "Guia de instalação em 10 minutos",
    description:
      "Nunca configurou nada assim antes? Sem problema. Passo a passo com print de cada tela. Você instala uma vez e usa para sempre.",
  },
];

export default function OfferSection() {
  return (
    <section className="px-5 py-20 md:py-28">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
          className="font-display text-[36px] md:text-[56px] uppercase text-white leading-[0.93] mb-10"
        >
          O QUE VOCÊ VAI RECEBER
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="font-display text-[36px] md:text-[56px] uppercase text-white leading-[0.93] mb-10"
        >
          Por{" "}
          <span style={{ color: "#E16B31" }}>apenas</span>
        </motion.h3>

        <div className="space-y-4 mb-10">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 + i * 0.1 }}
              className="p-5 rounded-sm"
              style={{
                background: "#111111",
                border: "1px solid #2A1A14",
                borderLeft: "3px solid #E16B31",
              }}
            >
              <div className="flex items-start gap-4">
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <h3 className="font-body text-[18px] font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p
                    className="font-body text-[15px] leading-relaxed"
                    style={{ color: "#A89990" }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
        >
          <SectionDivider />
        </motion.div>

        {/* Price block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.35 }}
          className="mt-10 px-8 py-10 rounded-lg text-center"
          style={{
            background: "linear-gradient(135deg, #111111, #1A0F0A)",
            border: "1px solid #832C0C",
          }}
        >
          <p className="font-body text-[16px] mb-3" style={{ color: "#A89990" }}>
            Tudo isso por:
          </p>
          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.45 }}
            className="font-display text-[72px] md:text-[80px] leading-none text-white"
            style={{ textShadow: "0 0 40px rgba(225, 107, 49, 0.4)" }}
          >
            {PAGE_CONFIG.price}
          </motion.p>
          <p
            className="font-body text-[14px] mt-4 leading-relaxed"
            style={{ color: "#A89990" }}
          >
            Acesso vitalício. Sem mensalidade. Sem renovação.
            <br />
            Paga uma vez, usa para sempre.
          </p>
        </motion.div>

        {/* Guarantee block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
          className="mt-4 p-6 rounded-lg flex items-start gap-4"
          style={{ background: "#111111", border: "1px solid #2A1A14" }}
        >
          <div className="flex-shrink-0">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path
                d="M20 5L7 11V21C7 29.3 12.8 37 20 39C27.2 37 33 29.3 33 21V11L20 5Z"
                stroke="#E16B31"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M14 20.5L18 24.5L26 16"
                stroke="#E16B31"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>
            <h3 className="font-display text-[24px] uppercase text-white mb-2">
              Garantia de {PAGE_CONFIG.guaranteeDays} dias.
            </h3>
            <p
              className="font-body text-[15px] leading-relaxed"
              style={{ color: "#A89990" }}
            >
              Instala, usa, e se achar que não valeu cada centavo, manda
              mensagem. Devolvo tudo sem perguntar nada. Mas acho que você não
              vai pedir.
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.45 }}
          className="mt-8"
          id="offer-cta"
        >
          <CtaButton text={PAGE_CONFIG.ctaTextOffer} size="large" />
          <p
            className="font-body text-center text-[13px] mt-3"
            style={{ color: "#A89990" }}
          >
            Pagamento seguro. Acesso imediato após confirmação.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
