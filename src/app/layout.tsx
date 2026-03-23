import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Autonoms AI — The team that never stops working",
  description:
    "Assemble AI agent teams for any business workflow. Built for SDR teams. Ready for anything.",
  openGraph: {
    title: "Autonoms AI — The team that never stops working",
    description:
      "Assemble AI agent teams for any business workflow. Built for SDR teams. Ready for anything.",
    siteName: "Autonoms AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Autonoms AI",
    description: "The team that never stops working.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="font-sans bg-page text-t1 antialiased">{children}</body>
    </html>
  );
}
