import { ButtonLogin, ContainerForm, LinkBox } from "./style";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { schema } from "./validator";
import { LoginProps } from "./types";
import { Input } from "../input/input";
import { InputPassword } from "../input/inputPassword";

export const FormLogin = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitData = (data: LoginProps) => {
    // signin(data, navigate);
    reset();
  };

  return (
    <>
      <ContainerForm onSubmit={handleSubmit(onSubmitData)}>
        <Input
          borderSchema
          type="email"
          placeholder="Email"
          register={register}
          name="email"
          error={errors.email?.message}
        />
        <InputPassword
          borderSchema
          type="password"
          placeholder="Senha"
          register={register}
          name="password"
          error={errors.password?.message}
        />
        <ButtonLogin type="submit" className="effect">
          Entrar
        </ButtonLogin>
        <LinkBox>
          <Link to="/">Voltar para Home</Link>
        </LinkBox>
      </ContainerForm>
    </>
  );
};
