import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: "Wellness Vitality Australia",
  description: "Holistic wellness services in Australia",
  icons: {
    icon: "/logoimg.png",
    shortcut: "/logoimg.png",
    apple: "/logoimg.png",
  },
  openGraph: {
    title: "Wellness Vitality Australia",
    description: "Holistic wellness services in Australia",
    url: "https://wellnessvitalityaustralia.com.au",
    siteName: "Wellness Vitality Australia",
    images: [
      {
        url: "/logoimg.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="antialiased font-serif bg-white text-[#1A1A1A]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
