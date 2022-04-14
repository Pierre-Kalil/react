import * as yup from "yup";

export const schema = yup.object().shape({
  subjectProblem: yup.string().required("Campo obrigatório"),
  subjectSituation: yup.string().required("Campo obrigatório"),
  subjectComments: yup.string().required("Campo obrigatório"),
  objectProblem: yup.string().required("Campo obrigatório"),
  objectSituation: yup.string().required("Campo obrigatório"),
  objectComments: yup.string().required("Campo obrigatório"),
  assessmentProblem: yup.string().required("Campo obrigatório"),
  assessmentSituation: yup.string().required("Campo obrigatório"),
  assessmentComments: yup.string().required("Campo obrigatório"),
  planProblem: yup.string().required("Campo obrigatório"),
  planSituation: yup.string().required("Campo obrigatório"),
  planComments: yup.string().required("Campo obrigatório"),
});
