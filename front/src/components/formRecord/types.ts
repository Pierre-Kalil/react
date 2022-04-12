import { Dispatch, SetStateAction } from "react";

export interface DataProps {
  subjectProblem: string;
  subjectSituation: string;
  subjectComments: string;
  objectProblem: string;
  objectSituation: string;
  objectComments: string;
  assessmentProblem: string;
  assessmentSituation: string;
  assessmentComments: string;
  planProblem: string;
  planSituation: string;
  planComments: string;
}

export interface InputModelProps {
  formValues: DataProps;
  steps: any;
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
  handleInputChange: (event: any) => void;
}
