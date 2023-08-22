import { ReactNode } from "react";
import ErrorMessageContextProvider from "./ErrorMsgContextProvier";
import ErrorMessage from "@/components/ErrorMessage";
import { Lato } from "next/font/google";
import LoginStatusContextProvider from "./LoginStatusContextProvider";
import { isLoggedin } from "@/utilities/isLoggedIn";

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
  const loginStatus = await isLoggedin();
  return (
    <html lang="en">
      <body className={lato.className}>
        <ErrorMessageContextProvider>
          <LoginStatusContextProvider loginStatus={loginStatus}>
            <ErrorMessage />
            <>{children}</>
          </LoginStatusContextProvider>
        </ErrorMessageContextProvider>
      </body>
    </html>
  );
}
