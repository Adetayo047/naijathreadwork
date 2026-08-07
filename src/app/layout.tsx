import type { Metadata } from "next";
import { Libre_Caslon_Text, Manrope } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import "./globals.css";

const libreCaslon = Libre_Caslon_Text({
  variable: "--font-libre-caslon",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NAIJA THREADWORKS | Beautifully Woven. Boldly Worn.",
  description:
    "Naija Threadworks bridges West African craftsmanship and contemporary luxury — hand-woven Ankara, bespoke tailoring, and wholesale export from Lagos, Nigeria to the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${libreCaslon.variable} ${manrope.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-background text-on-surface font-sans antialiased overflow-x-hidden">
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- next/font has no Google Symbols/icon-font support */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
        <div className="pointer-events-none fixed inset-0 z-[60] grain-overlay" />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}
