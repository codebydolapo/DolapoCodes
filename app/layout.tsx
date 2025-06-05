import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, Marck_Script } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', "800", "900"]
})

const marck = Marck_Script({
  subsets: ['latin'],
  weight: ['400']
})


export const metadata: Metadata = {
  title: "DolapoCodes",
  description: "Portfolio website for web/mobile developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-[100vw] scrollbar-hidden overflow-x-hidden">
      <body
        className={`${poppins.className} w-[100vw] overflow-x-hidden relative scrollbar-hidden`}
      >
        <>
        {children}
        </>
      <Navbar />
      </body>
    </html>
  );
}
