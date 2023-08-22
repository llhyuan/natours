// Login status provider
export interface LoginStatus {
  name: string;
  loginStatus: boolean;
  loginToken: string;
  photo: string;
}

export interface LoginStatusContext {
  isLogin: boolean;
  setLoginStatus: Dispatch<SetStateAction<boolean>>;
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
