import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
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
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}