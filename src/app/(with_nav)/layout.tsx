import Navbar from "@/components/Navbar";
import "../globals.css";
import "mapbox-gl/dist/mapbox-gl.css";
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
        <div className="sticky top-0 z-50">
          <Navbar />
        </div>
        <div className="z-40">{children}</div>
        <div className="mt-auto">
          <Footer />
        </div>
      </body>
    </html>
  );
}
