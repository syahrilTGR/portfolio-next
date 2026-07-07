import type { Metadata } from "next";
import { Outfit, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const metadataBase = new URL("https://porto-syahril-7s64.vercel.app");

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase,
  title: "Syahril — Portfolio",
  description: "Telecommunications & Digital Technology student at Polinema. Hackintosh builder, IoT tinkerer.",
  openGraph: {
    title: "Syahril — Portfolio",
    description: "Telecommunications & Digital Technology student at Polinema. Hackintosh builder, IoT tinkerer.",
    type: "website",
    images: ["/assets/images/profile.jpg"],
  },
  twitter: {
    card: "summary",
    title: "Syahril — Portfolio",
    description: "Telecommunications & Digital Technology student at Polinema. Hackintosh builder, IoT tinkerer.",
    images: ["/assets/images/profile.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} ${jetbrains.variable}`}>
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}