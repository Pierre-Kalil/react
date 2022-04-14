import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../input/input";
import { FormRecordStyle } from "./style";
import { schema } from "./validators";
import { Button } from "../button";
import { Select } from "./select";
import { AiFillCloseSquare } from "react-icons/ai";
import { useRecord } from "../../providers/record";
import { useUser } from "../../providers/user";

export const FormRecordNew = () => {
  const { patient } = useUser();
  const {
    setOpenModalForm,
    createRecord,
    setAttendance,
    attendance,
    attendanceList,
    setAttendanceList,
  } = useRecord();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitHandle = (data: any) => {
    setAttendanceList([...attendanceList, patient]);
    setAttendance(attendance + 1);
    const count = attendance;
    localStorage.setItem("@CliniMed:attendance", count.toString());
    createRecord(
      data,
      JSON.parse(localStorage.getItem("@CliniMed:patientID") || "")
    );
    setOpenModalForm(false);
  };

  return (
    <>
      <FormRecordStyle>
        <AiFillCloseSquare onClick={() => setOpenModalForm(false)} />
        <form onSubmit={handleSubmit(onSubmitHandle)}>
          <div className="form title">
            <h2>Subjetivo</h2>
            <Input
              type="text"
              placeholder="Problema"
              register={register}
              name="subjectProblem"
              error={errors.subjectProblem?.message}
            />
            <Select
              nameOption="Status"
              name="subjectSituation"
              register={register}
              error={errors.subjectSituation?.message}
              options={["Ativo", "Encerrado"]}
            />
            {errors.subjectSituation && (
              <span className="inputErrors">
                {errors.subjectSituation?.message}
              </span>
            )}
            <textarea
              placeholder="Observações"
              {...register("subjectComments", {
                required: true,
                maxLength: 30,
              })}
              name="subjectComments"
              rows={4}
              cols={50}
            />
            {errors.subjectComments && (
              <span className="inputErrors">
                {errors.subjectComments?.message}
              </span>
            )}
          </div>
          <div className="form title">
            <h2>Objetivo</h2>
            <Input
              type="text"
              placeholder="Problema"
              register={register}
              name="objectProblem"
              error={errors.objectProblem?.message}
            />
            <Select
              nameOption="Status"
              name="objectSituation"
              register={register}
              error={errors.objectSituation?.message}
              options={["Ativo", "Encerrado"]}
            />
            {errors.objectSituation && (
              <span className="inputErrors">
                {errors.objectSituation?.message}
              </span>
            )}
            <textarea
              placeholder="Observações"
              {...register("objectComments", { required: true, maxLength: 30 })}
              name="objectComments"
              rows={4}
              cols={50}
            />
            {errors.objectComments && (
              <span className="inputErrors">
                {errors.objectComments?.message}
              </span>
            )}
          </div>
          <div className="form title">
            <h2>Avaliação</h2>
            <Input
              type="text"
              placeholder="Problema"
              register={register}
              name="assessmentProblem"
              error={errors.assessmentProblem?.message}
            />
            <Select
              nameOption="Status"
              name="assessmentSituation"
              register={register}
              error={errors.assessmentSituation?.message}
              options={["Ativo", "Encerrado"]}
            />
            {errors.assessmentSituation && (
              <span className="inputErrors">
                {errors.assessmentSituation?.message}
              </span>
            )}
            <textarea
              placeholder="Observações"
              {...register("assessmentComments", {
                required: true,
                maxLength: 30,
              })}
              name="assessmentComments"
              rows={4}
              cols={50}
            />
            {errors.assessmentComments && (
              <span className="inputErrors">
                {errors.assessmentComments?.message}
              </span>
            )}
          </div>
          <div className="form title">
            <h2>Plano</h2>

            <Select
              nameOption="Plano de saúde"
              name="planProblem"
              register={register}
              error={errors.planProblem?.message}
              options={["Unimed", "SulAmerica", "Bradesco"]}
            />
            {errors.planProblem && (
              <span className="inputErrors">{errors.planProblem?.message}</span>
            )}
            <Select
              nameOption="Status"
              name="planSituation"
              register={register}
              error={errors.planSituation?.message}
              options={["Ativo", "Encerrado"]}
            />
            {errors.planSituation && (
              <span className="inputErrors">
                {errors.planSituation?.message}
              </span>
            )}
            <textarea
              placeholder="Observações"
              {...register("planComments", {
                required: true,
                maxLength: 30,
              })}
              name="planComments"
              rows={4}
              cols={50}
            />
            {errors.planComments && (
              <span className="inputErrors">
                {errors.planComments?.message}
              </span>
            )}
          </div>
          <div className="form footer">
            <Button name="Salvar" type={"submit"}></Button>
          </div>
        </form>
      </FormRecordStyle>
    </>
  );
};
