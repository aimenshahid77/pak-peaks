import type { Metadata } from "next";
import { Poppins, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Pak Peaks Travels & Tours | Northern Pakistan Expeditions",
  description:
    "Boutique road trips and trekking expeditions across Northern Pakistan. Discover Hunza Valley, Skardu, K2 Base Camp, Fairy Meadows and more with Pak Peaks.",
  keywords: [
    "Pakistan tours",
    "Hunza Valley",
    "K2 base camp trek",
    "Northern Pakistan travel",
    "Skardu tours",
    "Fairy Meadows",
    "Naran Kaghan",
    "Pak Peaks",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("h-full", poppins.variable, "font-sans", geist.variable)}>
      <body className="min-h-full bg-black text-white antialiased">{children}</body>
    </html>
  );
}
