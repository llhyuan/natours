import SettingSidebar from "@/components/SettingSidebar";
import { ReactNode } from "react";

import ContextProvider from "./contextProvider";

export default function ProfileLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex mx-10 py-10 relative">
      <ContextProvider>
        <div className="md:min-w-[280px] md:flex-[1] ">
          <SettingSidebar />
        </div>
        <div className="flex-[3] px-6">{children}</div>
      </ContextProvider>
    </div>
  );
}
