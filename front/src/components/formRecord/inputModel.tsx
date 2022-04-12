import { Button } from "../button";
import { Select } from "./select";
import { InputModelProps } from "./types";

export const InputModel = ({
  handleInputChange,
  formValues,
  steps,
  currentStep,
  setCurrentStep,
}: InputModelProps) => {
  return (
    <>
      <div className="fields">
        <div className="fields">
          <div className="field">
            <input
              type="text"
              placeholder="Problema"
              name={
                steps[currentStep].id === "SUBJECT"
                  ? "subjectProblem"
                  : steps[currentStep].id === "OBJECT"
                  ? "objectProblem"
                  : steps[currentStep].id === "ASSESSMENT"
                  ? "assessmentProblem"
                  : "planProblem"
              }
              onChange={handleInputChange}
              value={
                steps[currentStep].id === "SUBJECT"
                  ? formValues.subjectProblem
                  : steps[currentStep].id === "OBJECT"
                  ? formValues.objectProblem
                  : steps[currentStep].id === "ASSESSMENT"
                  ? formValues.assessmentProblem
                  : formValues.planProblem
              }
              required={true}
            />
          </div>
          <div className="field">
            <Select
              placeholder="Situação"
              name={
                steps[currentStep].id === "SUBJECT"
                  ? "subjectSituation"
                  : steps[currentStep].id === "OBJECT"
                  ? "objectSituation"
                  : steps[currentStep].id === "ASSESSMENT"
                  ? "assessmentSituation"
                  : "planSituation"
              }
              options={["", "Ativo", "Encerrado"]}
              onChange={handleInputChange}
              value={
                steps[currentStep].id === "SUBJECT"
                  ? formValues.subjectSituation
                  : steps[currentStep].id === "OBJECT"
                  ? formValues.objectSituation
                  : steps[currentStep].id === "ASSESSMENT"
                  ? formValues.assessmentSituation
                  : formValues.planSituation
              }
              required={true}
            />
          </div>
          <div className="field">
            <textarea
              placeholder="Observação"
              name={
                steps[currentStep].id === "SUBJECT"
                  ? "subjectComments"
                  : steps[currentStep].id === "OBJECT"
                  ? "objectComments"
                  : steps[currentStep].id === "ASSESSMENT"
                  ? "assessmentComments"
                  : "planComments"
              }
              onChange={handleInputChange}
              value={
                steps[currentStep].id === "SUBJECT"
                  ? formValues.subjectComments
                  : steps[currentStep].id === "OBJECT"
                  ? formValues.objectComments
                  : steps[currentStep].id === "ASSESSMENT"
                  ? formValues.assessmentComments
                  : formValues.planComments
              }
              required={true}
            />
          </div>
        </div>
      </div>
      {currentStep < steps.length - 1 && (
        <Button
          name="Proximo"
          callback={() => setCurrentStep((prevState) => prevState + 1)}
        >
          Proximo
        </Button>
      )}
    </>
  );
};
