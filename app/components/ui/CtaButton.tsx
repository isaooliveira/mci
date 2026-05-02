"use client";

import { motion } from "framer-motion";
import { PAGE_CONFIG } from "@/config/page";

interface CtaButtonProps {
  text?: string;
  size?: "default" | "large";
}

export default function CtaButton({ text, size = "default" }: CtaButtonProps) {
  const buttonText = text ?? PAGE_CONFIG.ctaText;

  return (
    <motion.a
      href={PAGE_CONFIG.checkoutUrl}
      className="block w-full text-center font-display uppercase tracking-[0.08em] text-white rounded-sm cursor-pointer"
      style={{
        background: "linear-gradient(135deg, #832C0C, #E16B31)",
        boxShadow: "0 0 40px rgba(225, 107, 49, 0.3)",
        padding: size === "large" ? "24px 48px" : "20px 48px",
        fontSize: size === "large" ? "22px" : "20px",
      }}
      whileHover={{
        scale: 1.01,
        boxShadow: "0 0 80px rgba(225, 107, 49, 0.45)",
        filter: "brightness(1.1)",
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      // TODO: Analytics — integrar pixel do Meta / GA4 no clique
    >
      {buttonText}
    </motion.a>
  );
}
