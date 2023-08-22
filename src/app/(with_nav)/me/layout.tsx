import SettingSidebar from "@/components/SettingSidebar";
import { ReactNode } from "react";

import ContextProvider from "./contextProvider";

export default function ProfileLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex py-20 relative ">
      <ContextProvider>
        <div className="md:min-w-[280px] max-w-[360px] md:flex-[1] ml-auto">
          <div className="w-0 md:fixed md:top-[11rem] lg:w-[min(28vw,360px)]">
            <SettingSidebar />
          </div>
        </div>
        <div className="flex-[3] px-6 max-w-[900px] mr-auto">{children}</div>
      </ContextProvider>
    </div>
  );
}
