import { useRecord } from "../../providers/record";
import { StatusContainer } from "./style";

export const AttendanceCounter = () => {
  const { attendanceList } = useRecord();
  return (
    <>
      <StatusContainer>
        <div className="box-circle">
          <span>Total atendimentos</span>
          <div className="circle">
            {localStorage.getItem("@CliniMed:attendance")}
          </div>
        </div>
        <div className="box-circle">
          <span>Total retornos</span>
          <div className="circle">
            {localStorage.getItem("@CliniMed:attendanceReturn")}
          </div>
        </div>
        <div className="box-circle">
          <span>Lista de clients</span>
          <div className="circle">
            {attendanceList &&
              attendanceList.map((item) => <span>{item}</span>)}
          </div>
        </div>
      </StatusContainer>
    </>
  );
};
