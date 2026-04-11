import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import SocialFooter from "./components/SocialFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Mehak Vohra",
  description:
    "Mehak Vohra — CEO of Clickbait Labs. Helping apps and internet brands grow through short-form video.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-12 px-6 py-16 sm:flex-row sm:gap-16 sm:px-10 sm:py-24">
          <Sidebar />
          <main className="flex min-w-0 flex-1 flex-col">
            {children}
            <SocialFooter />
          </main>
        </div>
      </body>
    </html>
  );
}
