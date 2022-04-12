import { useRecord } from "../../providers/record";
import { StatusContainer } from "./style";

export const AttendanceCounter = () => {
  const { attendance, attendanceReturn } = useRecord();
  return (
    <>
      <StatusContainer>
        <div>
          <div className="circle">
            {localStorage.getItem("@CliniMed:attendance")}
          </div>
          <span>Total atendimentos</span>
        </div>
        <div>
          <div className="circle">
            {localStorage.getItem("@CliniMed:attendanceReturn")}
          </div>
          <span>Total retornos</span>
        </div>
        <div>
          <div className="circle">Lista</div>
          <span>Lista de clients</span>
        </div>
      </StatusContainer>
    </>
  );
};
