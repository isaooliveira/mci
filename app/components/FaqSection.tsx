"use client";

import { motion } from "framer-motion";
import SectionBadge from "./ui/SectionBadge";
import FaqItem from "./ui/FaqItem";

const faqs = [
  {
    question: "O que é o Claude? Preciso abandonar o ChatGPT?",
    answer:
      "O Claude é uma IA com plano gratuito, parecida com o ChatGPT, mas que segue processos configurados com muito mais precisão. Você não precisa abandonar nada. Cria a conta no Claude em 3 minutos e usa as duas quando quiser.",
  },
  {
    question: "Preciso pagar assinatura do Claude para usar?",
    answer:
      "Não. O plano gratuito resolve. O guia de instalação já inclui o passo a passo para criar a conta do zero.",
  },
  {
    question: "Preciso saber de tecnologia para instalar?",
    answer:
      "Não. O guia tem print de cada tela. Se você sabe copiar e colar, instala em 10 minutos.",
  },
  {
    question: "Funciona para qualquer nicho?",
    answer:
      "Sim. O processo é configurado com o seu tema. Funciona para coach, terapeuta, profissional de saúde, educador, prestador de serviço. Qualquer pessoa que cria conteúdo.",
  },
  {
    question: "Por que o ChatGPT não faz isso sozinho?",
    answer:
      "Faz, mas mal. Sem um processo configurado, ele gera conteúdo genérico que poderia ser de qualquer pessoa. O que você está comprando é a lógica de criação que faz a ferramenta trabalhar do jeito certo, com a sua voz e para o seu público. O Claude executa esse processo de um jeito que o ChatGPT não acompanha.",
  },
  {
    question: "Quanto tempo leva para criar um roteiro do zero?",
    answer: "Entre 3 e 8 minutos. Para gerar 30 roteiros, separa uma tarde tranquila.",
  },
  {
    question: "Esse processo expira ou fica desatualizado?",
    answer:
      "Não. Você instala uma vez e usa enquanto quiser.",
  },
];

export default function FaqSection() {
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
          <SectionBadge text="DÚVIDAS" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="font-display text-[36px] md:text-[56px] uppercase text-white leading-[0.93] mb-10"
        >
          Perguntas <span style={{ color: "#E16B31" }}>frequentes</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
          className="space-y-2"
        >
          {faqs.map((faq, i) => (
            <FaqItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
