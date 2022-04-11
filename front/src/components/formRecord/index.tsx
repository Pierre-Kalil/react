import { FormStyle, InputsBox } from "./style";

export const FormRecord = () => {
  return (
    <>
      <FormStyle className="box">
        <InputsBox>
          <div className="record-info">
            <div className="title">Subjetiva</div>
          </div>
          <div className="record-info">
            <div className="title">Objetiva</div>
          </div>
          <div className="record-info">
            <div className="title">Avaliação</div>
          </div>
          <div className="record-info">
            <div className="title">Plano</div>
          </div>
        </InputsBox>
      </FormStyle>
    </>
  );
};
