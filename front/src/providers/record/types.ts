import { Dispatch, SetStateAction } from "react";
import { DataRecordProps } from "../../components/formRecord/types";

export interface RecordProps {
  subject: {
    problem: [];
    situation: string;
    comments: string;
  };
  object: {
    problem: [];
    situation: string;
    comments: string;
  };
  assessment: {
    problem: [];
    situation: string;
    comments: string;
  };
  plan: {
    problem: [];
    situation: string;
    comments: string;
  };
}

export interface RecordProviderProps {
  createRecord: (data: DataRecordProps, userId: string) => void;
  filterRecords: (id: string) => void;
  patientRecords: RecordProps[];
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  attendance: number;
  setAttendance: Dispatch<SetStateAction<number>>;
  attendanceReturn: number;
  setAttendanceReturn: Dispatch<SetStateAction<number>>;
  attendanceList: string[];
  setAttendanceList: Dispatch<SetStateAction<string[]>>;
  openModalForm: boolean;
  setOpenModalForm: Dispatch<SetStateAction<boolean>>;
}
