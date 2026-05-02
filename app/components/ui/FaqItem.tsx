"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface FaqItemProps {
  question: string;
  answer: string;
}

export default function FaqItem({ question, answer }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="rounded-sm overflow-hidden transition-all duration-300"
      style={{
        background: "#111111",
        border: `1px solid ${isOpen ? "#832C0C" : "#2A1A14"}`,
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left gap-4 cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="font-body text-[16px] font-medium text-white leading-snug">
          {question}
        </span>
        <span
          className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-[20px] font-bold leading-none transition-transform duration-300"
          style={{
            color: "#E16B31",
            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          +
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div
              className="px-5 pb-5 font-body text-[15px] leading-relaxed"
              style={{ color: "#A89990", borderTop: "1px solid #2A1A14" }}
            >
              <div className="pt-4">{answer}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
