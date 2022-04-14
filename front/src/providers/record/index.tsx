import { createContext, useContext, useEffect, useState } from "react";
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
  const [patientRecords, setPatientRecords] = useState<RecordProps[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [openModalForm, setOpenModalForm] = useState(false);
  const [attendance, setAttendance] = useState(
    Number(localStorage.getItem("@CliniMed:attendance"))
  );
  const [attendanceReturn, setAttendanceReturn] = useState(
    Number(localStorage.getItem("@CliniMed:attendanceReturn"))
  );
  const [attendanceList, setAttendanceList] = useState(
    JSON.parse(localStorage.getItem("@CliniMed:attendanceList") || "[]")
  );

  const createRecord = async (data: DataRecordProps, userId: string) => {
    await api
      .post("/record", {
        userId: userId,
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
      .then((res) => {
        console.log(res, "---------------------");
        return toast.success("Prontuário salvo com sucesso!");
      })
      .catch((err) => console.log(err));
  };

  const filterRecords = async (patientID: string) => {
    await api.get(`/record/${patientID}`).then((res) => {
      console.log(res);
      setPatientRecords(res.data);
    });
  };

  useEffect(() => {
    localStorage.setItem(
      "@CliniMed:attendanceList",
      JSON.stringify(attendanceList)
    );
  }, [attendanceList]);

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
        attendanceList,
        setAttendanceList,
        openModalForm,
        setOpenModalForm,
      }}
    >
      {children}
    </RecordContext.Provider>
  );
};

export const useRecord = () => useContext(RecordContext);
