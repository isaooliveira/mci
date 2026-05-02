"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PAGE_CONFIG } from "@/config/page";

export default function StickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const ctaEl = document.getElementById("offer-cta");

      if (ctaEl) {
        const rect = ctaEl.getBoundingClientRect();
        const isCtaVisible = rect.top < window.innerHeight && rect.bottom > 0;
        setVisible(scrollY > 300 && !isCtaVisible);
      } else {
        setVisible(scrollY > 300);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
          style={{
            background: "#111111",
            borderTop: "1px solid #832C0C",
            padding: "12px 16px",
          }}
        >
          <div className="flex gap-3 items-center max-w-3xl mx-auto">
            <span className="font-display text-[24px] text-white whitespace-nowrap">
              {PAGE_CONFIG.price}
            </span>
            <a
              href={PAGE_CONFIG.checkoutUrl}
              className="flex-1 h-11 flex items-center justify-center text-center font-display text-[16px] uppercase tracking-[0.08em] text-white rounded-sm"
              style={{
                background: "linear-gradient(135deg, #832C0C, #E16B31)",
              }}
            >
              {PAGE_CONFIG.ctaTextShort}
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
