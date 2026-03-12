import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Outfit, Inter, Fira_Code } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ayan Jyoti Bora - Full Stack & Mobile Developer",
  description: "Portfolio of Ayan Jyoti Bora, Full-Stack & Mobile Application Developer specializing in React, Next.js, and React Native.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${inter.variable} ${firaCode.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
