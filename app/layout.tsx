import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Máquina de Conteúdo Infinito — Transforme qualquer ideia em roteiro em 5 minutos",
  description:
    "A ferramenta que transforma qualquer ideia solta em roteiro pronto para gravar em menos de 5 minutos. Funciona no plano gratuito do Claude.",
  openGraph: {
    title: "Máquina de Conteúdo Infinito",
    description:
      "A ferramenta que transforma qualquer ideia solta em roteiro pronto para gravar em menos de 5 minutos. Funciona no plano gratuito do Claude.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${bebasNeue.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-bg text-white antialiased">{children}</body>
    </html>
  );
}
