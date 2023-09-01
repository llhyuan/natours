import Navbar from "@/components/Navbar";
import "../globals.css";
import "mapbox-gl/dist/mapbox-gl.css";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Notification from "@/components/ErrorMessage";
import SearchContextProvider from "./SearchContextProvider";
import SidebarContextProvider from "./SidebarContextProvider";

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
    <div className="bg-zinc-200 flex flex-col min-w-[375px] relative min-h-screen">
      <Notification position="nav" />
      <SearchContextProvider>
        <SidebarContextProvider>
          <div className="sticky top-0 z-50">
            <Navbar />
          </div>
          <>{children}</>
          <div className="mt-auto">
            <Footer />
          </div>
        </SidebarContextProvider>
      </SearchContextProvider>
    </div>
  );
}
