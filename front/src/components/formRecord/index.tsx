import { Button } from "../button";
import { InputModel } from "./inputModel";
import { useState } from "react";
import { useRecord } from "../../providers/record";
import { FormBlock, FormStyle } from "./style";
import { DataRecordProps, FormRecordProps } from "./types";

export const steps = [
  {
    id: "SUBJECT",
    title: "Subjetivo",
  },
  {
    id: "OBJECT",
    title: "Objetivo",
  },
  {
    id: "ASSESSMENT",
    title: "Situação",
  },
  {
    id: "PLAN",
    title: "Plano",
  },
];

export const FormRecord = ({ patientSelect }: FormRecordProps) => {
  const { createRecord, setAttendance, attendance } = useRecord();
  const [currentStep, setCurrentStep] = useState(0);
  const [formValues, setFormValues] = useState<DataRecordProps>({
    subjectProblem: "",
    subjectSituation: "",
    subjectComments: "",
    objectProblem: "",
    objectSituation: "",
    objectComments: "",
    assessmentProblem: "",
    assessmentSituation: "",
    assessmentComments: "",
    planProblem: "",
    planSituation: "",
    planComments: "",
  });

  function handleInputChange(event: any) {
    const { name, value } = event.target;
    console.log(formValues);
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  async function handleSubmit(e: any) {
    e.preventDefault();
    createRecord(formValues);
    setCurrentStep(0);
    setAttendance(attendance + 1);
    const count = attendance;
    localStorage.setItem("@CliniMed:attendance", count.toString());
  }

  return (
    <>
      <FormStyle>
        {patientSelect.name.length < 1 ? <FormBlock /> : <></>}
        <form className="steps-form" onSubmit={handleSubmit}>
          <div className="fields-container">
            <p>{steps[currentStep].title}</p>
            <InputModel
              handleInputChange={handleInputChange}
              formValues={formValues}
              steps={steps}
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
            />
            {currentStep === steps.length - 1 && (
              <Button name="Enviar" type={"submit"}>
                Enviar
              </Button>
            )}
          </div>
        </form>
      </FormStyle>
    </>
  );
};
