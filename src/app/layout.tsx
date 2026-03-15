import type { Metadata } from "next";
import { Inter, Outfit, Dancing_Script } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Loader from "@/components/layout/Loader";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const dancingScript = Dancing_Script({ subsets: ["latin"], variable: "--font-cursive" });

export const metadata: Metadata = {
  title: "Bishnu & Deepika | Modern Software & Web Platforms",
  description: "We build intelligent software and scalable web platforms. Portfolio of Bishnu (Backend & AI) and Deepika (Frontend & UI).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} ${dancingScript.variable} font-sans antialiased text-black bg-white`}>
        <Loader />
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
