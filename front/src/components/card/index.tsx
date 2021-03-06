import { useRecord } from "../../providers/record";
import { useUser } from "../../providers/user";
import { Button } from "../button";
import { CardStyle } from "./style";
import { RecordCard } from "./types";

export const Card = (record: RecordCard) => {
  const { patient } = useUser();
  const {
    setAttendanceReturn,
    attendanceReturn,
    setAttendanceList,
    attendanceList,
  } = useRecord();

  const handleAttendanceReturn = () => {
    setAttendanceList([...attendanceList, patient]);
    setAttendanceReturn(attendanceReturn + 1);
    const count = attendanceReturn;
    localStorage.setItem("@CliniMed:attendanceReturn", count.toString());
  };
  return (
    <CardStyle>
      <div className="title">
        <h2>Subjetivo</h2>
        <p>
          <span>Problema:</span> {record.record.subject.problem}
        </p>
        <p>
          <span>Situação:</span>{" "}
          {record.record.subject.situation ? "Ativo" : "Encerrado"}
        </p>
        <p>
          <span>Observações:</span> {record.record.subject.comments}
        </p>
      </div>
      <div className="title">
        <h2>Objetivo</h2>
        <p>
          <span>Problema:</span> {record.record.object.problem}
        </p>
        <p>
          <span>Situação:</span>{" "}
          {record.record.object.situation ? "Ativo" : "Encerrado"}
        </p>
        <p>
          <span>Observações:</span> {record.record.object.comments}
        </p>
      </div>
      <div className="title">
        <h2>Avaliação</h2>
        <p>
          <span>Problema:</span> {record.record.assessment.problem}
        </p>
        <p>
          <span>Situação:</span>{" "}
          {record.record.assessment.situation ? "Ativo" : "Encerrado"}
        </p>
        <p>
          <span>Observações:</span> {record.record.assessment.comments}
        </p>
      </div>
      <div className="title">
        <h2>Plano</h2>
        <p>
          <span>Problema:</span> {record.record.plan.problem}
        </p>
        <p>
          <span>Situação:</span>{" "}
          {record.record.plan.situation ? "Ativo" : "Encerrado"}
        </p>
        <p>
          <span>Observações:</span> {record.record.plan.comments}
        </p>
      </div>
      <Button name="Atualizar" callback={handleAttendanceReturn}></Button>
    </CardStyle>
  );
};
