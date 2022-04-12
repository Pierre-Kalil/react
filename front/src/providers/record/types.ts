import { DataProps } from "../../components/formRecord/types";

export interface RecordProviderProps {
  createRecord: (data: DataProps) => void;
  filterRecords: (id: string) => void;
  patientRecords: DataProps[];
}
