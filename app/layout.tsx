import type { Metadata } from "next";
import { Noto_Sans_Display } from "next/font/google";
import "./globals.css";

const geistSans = Noto_Sans_Display({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Noto_Sans_Display({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dasshboard companies metrics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
