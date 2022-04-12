import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";
import { DataProps } from "../../components/formRecord/types";
import api from "../../services/api";
import { AuthProviderProps } from "../auth/types";
import { useUser } from "../user";
import { RecordProviderProps } from "./types";

const RecordContext = createContext<RecordProviderProps>(
  {} as RecordProviderProps
);

export const RecordProvider = ({ children }: AuthProviderProps) => {
  const { patientID } = useUser();
  const [patientRecords, setPatientRecords] = useState([]);
  const createRecord = async (data: DataProps) => {
    await api
      .post("/record", {
        userId: patientID,
        subject: {
          problem: data.subjectProblem,
          situation: data.subjectSituation != "Encerrado" ? true : false,
          comments: data.subjectComments,
        },
        object: {
          problem: data.objectProblem,
          situation: data.objectSituation != "Encerrado" ? true : false,
          comments: data.objectComments,
        },
        assessment: {
          problem: data.assessmentProblem,
          situation: data.assessmentSituation != "Encerrado" ? true : false,
          comments: data.assessmentComments,
        },
        plan: {
          problem: data.planProblem,
          situation: data.planSituation != "Encerrado" ? true : false,
          comments: data.planComments,
        },
      })
      .then((_) => {
        localStorage.clear();
        toast.success("Prontuário salvo com sucesso!");
      })
      .catch((_) => toast.error("Algo saiu errado. Tente novamente."));
  };

  const filterRecords = async (patientID: string) => {
    await api.get(`/record/${patientID}`).then((res) => {
      console.log(res);
      setPatientRecords(res.data);
    });
  };

  return (
    <RecordContext.Provider
      value={{ createRecord, filterRecords, patientRecords }}
    >
      {children}
    </RecordContext.Provider>
  );
};

export const useRecord = () => useContext(RecordContext);
