import { ReactNode } from "react";
import NotificationContextProvider from "./NotificationContextProvier";
import { lato, latoSemiBold, latoBold } from "./fonts";
import LoginStatusContextProvider from "./LoginStatusContextProvider";

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
