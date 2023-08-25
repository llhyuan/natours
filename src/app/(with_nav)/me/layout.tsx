"use client";
import SettingSidebar from "@/components/SettingSidebar";
import { ReactNode, useContext, useEffect } from "react";

import ContextProvider from "./contextProvider";
import { loginStatusContext } from "@/app/LoginStatusContextProvider";
import { usePathname, useRouter } from "next/navigation";

export default function ProfileLayout({ children }: { children: ReactNode }) {
  const { loginStatus } = useContext(loginStatusContext);
  const router = useRouter();
  const path = usePathname();
  console.log(path.startsWith("/me/reset-password/"));

  useEffect(() => {
    if (!path.startsWith("/me/forget-password/")) {
      if (!loginStatus.loginStatus) {
        router.replace("/login");
      }
    }
  }, [path, router, loginStatus.loginStatus]);
  return (
    <div className="flex py-20 relative md:px-4">
      <ContextProvider>
        <div className="md:min-w-[280px] max-w-[360px] md:flex-[1] ml-auto">
          <div className="w-0 md:fixed md:top-[11rem] lg:w-[min(28vw,360px)]">
            <SettingSidebar />
          </div>
        </div>
        <div className="flex-[3] max-w-[600px] lg:ml-[6vw] mr-auto min-h-[50vh] min-w-fit">
          {children}
        </div>
      </ContextProvider>
    </div>
  );
}
