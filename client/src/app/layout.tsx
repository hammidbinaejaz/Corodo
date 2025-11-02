import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/sections/Navbar";
import { Providers } from "@/components/Providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Corodo - AI Career Guidance Platform",
  description:
    "Corodo is an AI-powered career guidance platform built by Hammid Bin Aejaz. Get personalized career advice, skill roadmaps, and professional guidance.",
  openGraph: {
    title: "Corodo - AI Career Guidance Platform",
    description:
      "Corodo is an AI-powered career guidance platform built by Hammid Bin Aejaz. Get personalized career advice, skill roadmaps, and professional guidance.",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
