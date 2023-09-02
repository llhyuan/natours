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
    <html lang="en">
      <body className={lato.className}>
        <NotificationContextProvider>
          <LoginStatusContextProvider>
            <div className="transition-all duration-300 ease-in-out">
              {children}
            </div>
          </LoginStatusContextProvider>
        </NotificationContextProvider>
      </body>
    </html>
  );
}
