import { ReactNode } from "react";
import NotificationContextProvider from "./NotificationContextProvier";
import { Lato } from "next/font/google";
import LoginStatusContextProvider from "./LoginStatusContextProvider";

const lato = Lato({
  weight: "300",
  style: "normal",
  subsets: ["latin"],
});

export default async function WebsiteLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={lato.className + " text-zinc-700"}>
        <NotificationContextProvider>
          <LoginStatusContextProvider>
            <div>{children}</div>
          </LoginStatusContextProvider>
        </NotificationContextProvider>
      </body>
    </html>
  );
}
