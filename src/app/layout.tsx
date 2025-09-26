import type { Metadata } from "next";
import { Geist_Sans as GeistSans } from "next/font/google";
import "./globals.css";

const geistSans = GeistSans({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "Sci-Fi Portfolio - A Next.js Adventure",
  description: "A modular Next.js application with a sci-fi theme, built step-by-step.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} font-sans antialiased`}>
        {/* Header will be added later */}
        <main className="relative flex flex-col min-h-screen">
          {children}
        </main>
        {/* Footer will be added later */}
      </body>
    </html>
  );
}