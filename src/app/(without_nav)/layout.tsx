import "../globals.css";
import type { Metadata } from "next";
import { Lato } from "next/font/google";

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
    <html lang="en" className="h-full">
      <body className={lato.className + " h-full min-w-[350px]"}>
        {children}
      </body>
    </html>
  );
}
