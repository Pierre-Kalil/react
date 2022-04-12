import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";
import { DataRecordProps } from "../../components/formRecord/types";
import api from "../../services/api";
import { AuthProviderProps } from "../auth/types";
import { useUser } from "../user";
import { RecordProps, RecordProviderProps } from "./types";

const RecordContext = createContext<RecordProviderProps>(
  {} as RecordProviderProps
);

export const RecordProvider = ({ children }: AuthProviderProps) => {
  const { patientID } = useUser();
  const [patientRecords, setPatientRecords] = useState<RecordProps[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [attendance, setAttendance] = useState(0);
  const [attendanceReturn, setAttendanceReturn] = useState(0);

  const createRecord = async (data: DataRecordProps) => {
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
        return toast.success("Prontuário salvo com sucesso!");
      })
      .catch((_) => toast.error("Algo saiu errado. Tente novamente."));
  };

  const filterRecords = async (patientID: string) => {
    await api.get(`/record/${patientID}`).then((res) => {
      setPatientRecords(res.data);
    });
  };

  return (
    <RecordContext.Provider
      value={{
        createRecord,
        filterRecords,
        patientRecords,
        openModal,
        setOpenModal,
        attendance,
        setAttendance,
        attendanceReturn,
        setAttendanceReturn,
      }}
    >
      {children}
    </RecordContext.Provider>
  );
};

export const useRecord = () => useContext(RecordContext);
