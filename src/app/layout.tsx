import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { NavBar } from "@/components/ui/tubelight-navbar";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Innocents France",
  description: "Association humanitaire pour les orphelins et les mamans",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${outfit.variable} antialiased`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
