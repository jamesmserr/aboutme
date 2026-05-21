import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "James Merrill — Performance Marketer",
  description:
    "Veteran performance marketer specializing in paid social, paid search, growth strategy, and lifecycle marketing. Bridging creative and data.",
  openGraph: {
    title: "James Merrill — Performance Marketer",
    description:
      "Veteran performance marketer specializing in paid social, paid search, growth strategy, and lifecycle marketing.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
        {children}
      </body>
    </html>
  );
}
