// Login status provider
export interface LoginStatus {
  name: string;
  loginStatus: boolean;
  email: string;
  photo: string;
}

export interface LoginStatusContext {
  loginStatus: LoginStatus;
  setLoginStatus: Dispatch<SetStateAction<LoginStatus>>;
}

// Error message component
export interface Notification {
  reveal: boolean;
  message: string;
  category: string;
}

export interface NotificationContext {
  notification: Notification;
  setNotificationStatus: Dispatch<SetStateAction<Notification>>;
}
