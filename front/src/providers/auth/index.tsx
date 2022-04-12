import { createContext, useContext, useEffect, useState } from "react";
import { NavigateFunction } from "react-router";
import api from "../../services/api";
import { AuthProviderProps, AuthProviderData, Decoded } from "./types";
import { LoginProps } from "../../components/formLogin/types";
import jwt_decode from "jwt-decode";
import toast from "react-hot-toast";

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState({ id: "", name: "", email: "" });
  const [token, setToken] = useState(
    localStorage.getItem("@CliniMed:token") || ""
  );

  const signin = async (data: LoginProps, navigate: NavigateFunction) => {
    await api
      .post("/login", data)
      .then((res) => {
        localStorage.clear();
        localStorage.setItem("@CliniMed:token", JSON.stringify(res.data.token));
        setToken(res.data.token);
        toast.success("Bem vindo!");
        navigate("/dashboard");
      })
      .catch((_) => toast.error("Algo saiu errado. Tente novamente."));
  };

  useEffect(() => {
    if (token) {
      setUser(jwt_decode<Decoded>(token));
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ signin, token, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
