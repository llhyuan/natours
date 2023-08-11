import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Lato } from "next/font/google";
import Footer from "@/components/Footer";

const lato = Lato({
  weight: "300",
  style: "normal",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Natours",
  description: "Find the tour of your dream.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          lato.className +
          " bg-zinc-200 flex flex-col min-h-screen min-w-[375px]"
        }
      >
        <div className="relative">
          <Navbar />
        </div>
        {children}
        <div className="mt-auto">
          <Footer />
        </div>
      </body>
    </html>
  );
}
