import { Button } from "../button";
import { FormStyle, InputsBox } from "./style";
import { InputModel } from "./inputModel";

export const FormRecord = () => {
  const onSubmitData = (event: any) => {};

  return (
    <>
      <FormStyle className="box">
        <InputsBox>
          <InputModel title="Subjetiva" />
          <InputModel title="Objetiva" />
          <InputModel title="Avaliação" />
          <InputModel title="Plano" />
        </InputsBox>
        <div>
          <Button name="Salvar" type="submit">
            Enviar
          </Button>
        </div>
      </FormStyle>
    </>
  );
};
