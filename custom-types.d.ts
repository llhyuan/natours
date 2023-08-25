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
export interface ErrorMessage {
  error: boolean;
  errMessage: string;
}

export interface ErrorMsgContext {
  errMsg: ErrorMessage;
  setErrMsgStatus: Dispatch<SetStateAction<ErrorMessage>>;
}
