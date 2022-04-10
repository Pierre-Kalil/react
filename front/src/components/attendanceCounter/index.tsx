import { StatusContainer } from "./style";

export const AttendanceCounter = () => {
  return (
    <>
      <StatusContainer>
        <div>
          <div className="circle">15</div>
          <span>Total atendimentos</span>
        </div>
        <div>
          <div className="circle">9</div>
          <span>Total retornos</span>
        </div>
        <div>
          <div className="circle">2</div>
          <span>Lista de clients</span>
        </div>
      </StatusContainer>
    </>
  );
};
