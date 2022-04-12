import { Dispatch, SetStateAction } from "react";

export interface UserProps {
  filterUser: () => void;
  patient: {
    id: string;
    name: string;
    email: string;
    password: string;
  };
  patientID: string;
  setPatientID: Dispatch<SetStateAction<string>>;
}
