import "../globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Natours",
  description: "Find the tour of your dream.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
