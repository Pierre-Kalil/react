import { useRecord } from "../../providers/record";
import { StatusContainer } from "./style";

export const AttendanceCounter = () => {
  const { attendanceList, attendanceReturn, attendance } = useRecord();
  return (
    <>
      <StatusContainer>
        <div className="box-circle">
          <span>Total atendimentos</span>
          <div className="circle">
            <span>{attendance}</span>
          </div>
        </div>
        <div className="box-circle">
          <span>Total retornos</span>
          <div className="circle">
            <span>{attendanceReturn}</span>
          </div>
        </div>
        <div className="box-circle">
          <span>Pacientes atendidos</span>
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
