import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";

import "./globals.css";
import Header from "../components/Header";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  variable: "--font-comfortaa",
});

export const metadata: Metadata = {
  title: "GaadiGuru",
  description: "Your Vehicle. Our Responsibility.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={comfortaa.variable}>
        <Header />

        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}