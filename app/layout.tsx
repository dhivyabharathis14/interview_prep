import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";

const monoSans = Mona_Sans({
  variable: "--font-mono-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "PrepWIse",
  description: "An AI driven Interview Prep Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${monoSans.className} antialiased pattern`}
      >
        {children}
      </body>
    </html>
  );
}
