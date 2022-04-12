import { Button } from "../button";
import { CardStyle } from "./style";
import { RecordCard } from "./types";

export const Card = (record: RecordCard) => {
  return (
    <CardStyle>
      <div>
        <h2>Subjetivo</h2>
        {record.record.subject.problem}
        {record.record.subject.situation}
        {record.record.subject.comments}
      </div>
      <div>
        <h2>Objetivo</h2>
        {record.record.object.problem}
        {record.record.object.situation}
        {record.record.object.comments}
      </div>
      <div>
        <h2>Situação</h2>
        {record.record.assessment.problem}
        {record.record.assessment.situation}
        {record.record.assessment.comments}
      </div>
      <div>
        <h2>Plano</h2>
        {record.record.plan.problem}
        {record.record.plan.situation}
        {record.record.plan.comments}
      </div>
      <Button name="Atualizar"></Button>
    </CardStyle>
  );
};