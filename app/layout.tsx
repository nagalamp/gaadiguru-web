import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import Script from "next/script";

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

const GA_MEASUREMENT_ID = "G-QLZ72KMLFV";

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

        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}