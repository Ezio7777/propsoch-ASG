import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Propsoch",
  description:
    "Get end-to-end guidance from property experts who've helped 1000+ intelligent homebuyers in Bangalore and Mumbai. Book a free appointment today.",
  keywords: "real estate bangalore, buy property bangalore, home buying guide, propsoch",
  openGraph: {
    title: "Propsoch — Buy Your Home Intelligently",
    description:
      "India's most advanced real estate research platform. 2750+ hours of advice. 210+ partner builders.",
    url: "https://www.propsoch.com",
    siteName: "Propsoch",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="antialiased bg-white text-gray-900">{children}</body>
    </html>
  );
}
