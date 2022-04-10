import { Dispatch, ReactNode, SetStateAction } from "react";

import { NavigateFunction } from "react-router-dom";
import { LoginProps } from "../../components/formLogin/types";

export interface AuthProviderProps {
  children: ReactNode;
}

export interface AuthProviderData {
  signin: (data: LoginProps, navigate: NavigateFunction) => Promise<void>;
  token: string;
  setUser: (value: IUserToken) => void;
  user: IUserToken;
}
interface IUserToken {
  id: string;
  name: string;
  email: string;
}

export interface Decoded {
  id: string;
  email: string;
  name: string;
}
