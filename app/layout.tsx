// ============================================
// layout.tsx - Root Layout
// ============================================
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: "Bashorun Dolapo | Full Stack Developer",
  description: "Portfolio of Bashorun Dolapo - Full Stack Web and Mobile Developer specializing in React, Next.js, and React Native",
  keywords: ["web developer", "mobile developer", "React", "Next.js", "React Native", "portfolio"],
  authors: [{ name: "Bashorun Dolapo" }],
  openGraph: {
    title: "Bashorun Dolapo | Full Stack Developer",
    description: "Portfolio of Bashorun Dolapo - Full Stack Web and Mobile Developer",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden scroll-smooth">
      <body className={`${poppins.className} overflow-x-hidden relative antialiased`}>
        <Header />
        <main>
          {children}
        </main>
        <Navbar />
      </body>
    </html>
  );
}