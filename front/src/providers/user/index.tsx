import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import api from "../../services/api";
import { AuthProviderProps } from "../auth/types";
import { UserProps } from "./types";

const UserContext = createContext<UserProps>({} as UserProps);

export const UserProvider = ({ children }: AuthProviderProps) => {
  const [patientID, setPatientID] = useState("");
  const [patient, setPatient] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
  });
  const filterUser = async (id: string) => {
    await api
      .get(`/user/${id}`)
      .then((res) => {
        localStorage.clear();
        localStorage.setItem("patient", res.data.name);
        setPatient(res.data);
      })
      .catch((_) => toast.error("Paciente não localizado."));
  };
  return (
    <UserContext.Provider
      value={{ filterUser, patient, patientID, setPatientID }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
