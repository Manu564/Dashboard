import type { Metadata } from "next";
import { Noto_Sans_Display } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { ThemeProvider } from "./(routes)/components/ui/theme-provider";

const geistSans = Noto_Sans_Display({
  variable: "--font-geist-asns",
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
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            enableSystem
            disableTransitionOnChange
          >
            <header className="">
              <SignedOut>
                <SignInButton />
                <SignUpButton>
                  <button className="bg-[#6c47ff] text-ceramic-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                    Sign Up
                  </button>
                </SignUpButton>
              </SignedOut>
              <SignedIn></SignedIn>
            </header>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
