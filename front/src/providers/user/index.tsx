import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import api from "../../services/api";
import { AuthProviderProps } from "../auth/types";
import { UserProps } from "./types";

const UserContext = createContext<UserProps>({} as UserProps);

export const UserProvider = ({ children }: AuthProviderProps) => {
  const [patient, setPatient] = useState(
    localStorage.getItem("@CliniMed:patientName") || ""
  );

  const filterUser = async () => {
    await api
      .get(
        `/user/${JSON.parse(localStorage.getItem("@CliniMed:patientID") || "")}`
      )
      .then((res) => {
        localStorage.setItem("@CliniMed:patientName", res.data.name);
        setPatient(res.data.name);
      })
      .catch((_) => toast.error("Paciente não localizado"));
  };

  return (
    <UserContext.Provider value={{ filterUser, patient }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
