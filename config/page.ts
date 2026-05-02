const DEFAULT_CHECKOUT_URL =
  "https://pay.hotmart.com/N105654520A?off=10zoehfa";

function resolveCheckoutUrl(): string {
  const raw = process.env.NEXT_PUBLIC_CHECKOUT_URL?.trim();
  if (raw?.startsWith("http://") || raw?.startsWith("https://")) {
    return raw;
  }
  return DEFAULT_CHECKOUT_URL;
}

export const PAGE_CONFIG = {
  productName: "Máquina de Conteúdo Infinito",
  price: "R$ 67",
  checkoutUrl: resolveCheckoutUrl(),
  guaranteeDays: 7,
  ctaText: "Quero a Máquina de Conteúdo Infinito por R$ 67",
  ctaTextShort: "Quero agora →",
  ctaTextOffer: "Quero a Máquina por R$ 67",
  ctaTextFinal: "Quero a Máquina de Conteúdo Infinito — R$ 67",
};
