import SettingSidebar from "@/components/SettingSidebar";
import { ReactNode } from "react";

export default function ProfileLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex py-20 relative md:px-4">
      <div className="md:min-w-[280px] max-w-[360px] md:flex-[1] ml-auto z-20">
        <div className="w-0 md:fixed md:top-[11rem] lg:w-[min(28vw,360px)]">
          <SettingSidebar />
        </div>
      </div>
      <div className="flex-[3] max-w-[600px] lg:ml-[6vw] mr-auto min-h-[50vh] z-10">
        {children}
      </div>
    </div>
  );
}
