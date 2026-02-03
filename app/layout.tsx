import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/ui/Navbar";
import Footer from "./components/sections/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JAPZI TECHZ - Premium IT Solutions & Technology Services",
  description: "Transform your business with cutting-edge IT solutions. Expert software development, cloud services, cybersecurity, and digital transformation.",
  keywords: "IT solutions, software development, cloud services, cybersecurity, digital transformation, technology consulting",
  authors: [{ name: "JAPZI TECHZ" }],
  openGraph: {
    title: "JAPZI TECHZ - Premium IT Solutions",
    description: "Transform your business with cutting-edge IT solutions",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}