import { ReactNode } from "react";
import ErrorMessageContextProvider from "./ErrorMsgContextProvier";
import ErrorMessage from "@/components/ErrorMessage";
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
        <ErrorMessageContextProvider>
          <LoginStatusContextProvider>
            <ErrorMessage />
            <>{children}</>
          </LoginStatusContextProvider>
        </ErrorMessageContextProvider>
      </body>
    </html>
  );
}
