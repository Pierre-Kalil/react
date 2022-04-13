import { Button } from "../button";
import { InputModel } from "./inputModel";
import { useState } from "react";
import { useRecord } from "../../providers/record";
import { FormBlock, FormStyle } from "./style";
import { DataRecordProps, FormRecordProps } from "./types";
import { useUser } from "../../providers/user";

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
  const { patient } = useUser();
  const {
    createRecord,
    setAttendance,
    attendance,
    attendanceList,
    setAttendanceList,
  } = useRecord();
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

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    console.log(formValues);
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setAttendanceList([...attendanceList, patient]);
    setAttendance(attendance + 1);
    const count = attendance;
    localStorage.setItem("@CliniMed:attendance", count.toString());
    createRecord(
      formValues,
      JSON.parse(localStorage.getItem("@CliniMed:patientID") || "")
    );
    setCurrentStep(0);
  };

  return (
    <>
      <FormStyle>
        {patientSelect.length < 1 ? <FormBlock /> : <></>}
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
