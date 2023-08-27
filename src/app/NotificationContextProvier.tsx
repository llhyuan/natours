"use client";
import { ReactNode, createContext, useState } from "react";
import { Notification, NotificationContext } from "@Global/custom-types";

const defaultContext: NotificationContext = {
  notification: { reveal: false, message: "", category: "error" },
  setNotificationStatus: () => {},
};

export const notificationContext = createContext(defaultContext);

export default function NotificationContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [notification, setNotificationStatus] = useState<Notification>({
    reveal: false,
    message: "",
    category: "",
  });
  return (
    <notificationContext.Provider
      value={{ notification, setNotificationStatus }}
    >
      {children}
    </notificationContext.Provider>
  );
}
