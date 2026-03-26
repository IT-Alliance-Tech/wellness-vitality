import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Playfair_Display } from 'next/font/google';

const mackinacFallback = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-mackinac',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata = {
  title: "Wellness Vitality",
  description: "Wellness and Vitality Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${mackinacFallback.variable} font-mackinac antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
