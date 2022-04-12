import { createContext, useContext } from "react";
import toast from "react-hot-toast";
import { DataProps } from "../../components/formRecord/types";
import api from "../../services/api";
import { AuthProviderProps } from "../auth/types";
import { RecordProviderProps } from "./types";

const RecordContext = createContext<RecordProviderProps>(
  {} as RecordProviderProps
);

export const RecordProvider = ({ children }: AuthProviderProps) => {
  const createRecord = async (data: DataProps) => {
    await api
      .post("/record", {
        userId: "b384841b-50aa-4b38-906d-51ba0f911920",
        subject: {
          problem: data.subjectProblem,
          situation: data.subjectSituation,
          comments: data.subjectComments,
        },
        object: {
          problem: data.objectProblem,
          situation: data.objectSituation,
          comments: data.objectComments,
        },
        assessment: {
          problem: data.assessmentProblem,
          situation: data.assessmentSituation,
          comments: data.assessmentComments,
        },
        plan: {
          problem: data.planProblem,
          situation: data.planSituation,
          comments: data.planComments,
        },
      })
      .then((_) => {
        localStorage.clear();
        toast.success("Prontuário salvo com sucesso!");
      })
      .catch((_) => toast.error("Algo saiu errado. Tente novamente."));
  };

  return (
    <RecordContext.Provider value={{ createRecord }}>
      {children}
    </RecordContext.Provider>
  );
};

export const useRecord = () => useContext(RecordContext);
