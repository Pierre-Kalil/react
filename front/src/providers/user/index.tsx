import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import api from "../../services/api";
import { useAuth } from "../auth";
import { AuthProviderProps } from "../auth/types";
import { UserProps } from "./types";

const UserContext = createContext<UserProps>({} as UserProps);

export const UserProvider = ({ children }: AuthProviderProps) => {
  const { token } = useAuth();
  const [patientID, setPatientID] = useState(
    localStorage.getItem("@CliniMed:patientID") || ""
  );
  const [patient, setPatient] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
  });
  const filterUser = async () => {
    await api
      .get(`/user/${patientID}`)
      .then((res) => {
        setPatient(res.data);
      })
      .catch((_) => console.log("Paciente não localizado."));
  };

  useEffect(() => {
    if (token) {
      filterUser();
    }
  }, [token, patientID]);

  return (
    <UserContext.Provider
      value={{ filterUser, patient, patientID, setPatientID }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
