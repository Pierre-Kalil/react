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
            {!!localStorage.getItem("@CliniMed:attendance") ? (
              localStorage.getItem("@CliniMed:attendance")
            ) : (
              <span>0</span>
            )}
          </div>
        </div>
        <div className="box-circle">
          <span>Total retornos</span>
          <div className="circle">
            {!!localStorage.getItem("@CliniMed:attendanceReturn") ? (
              localStorage.getItem("@CliniMed:attendanceReturn")
            ) : (
              <span>0</span>
            )}
          </div>
        </div>
        <div className="box-circle">
          <span>Lista de clients</span>
          <div className="circle">
            {attendanceList.length > 1 ? (
              attendanceList.map((item) => <span>{item}</span>)
            ) : (
              <>
                <span>Sem atendimentos</span>
              </>
            )}
          </div>
        </div>
      </StatusContainer>
    </>
  );
};
