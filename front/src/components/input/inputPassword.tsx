import { useState } from "react";
import { Container, InputContainer } from "./style";
import { InputProps } from "./types";
import Visibility from "../../assets/visibility.svg";
import VisibilityWhite from "../../assets/visibilityW.svg";
import Invisible from "../../assets/invisible.svg";
import InvisibleWhite from "../../assets/invisibleW.svg";

export const InputPassword = ({
  register,
  type,
  name,
  error = "",
  borderSchema = false,
  colorSchema = false,
  ...rest
}: InputProps) => {
  const [passwordShown, setPasswordShown] = useState<boolean>(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
    <Container>
      <InputContainer colorSchema={colorSchema} borderSchema={borderSchema}>
        <input
          {...register(name)}
          type={passwordShown ? "text" : "password"}
          {...rest}
        />
        {colorSchema ? (
          <img
            src={passwordShown ? Invisible : Visibility}
            alt="password-visibility"
            onClick={togglePasswordVisiblity}
          />
        ) : (
          <img
            src={passwordShown ? InvisibleWhite : VisibilityWhite}
            alt="password-visibility"
            onClick={togglePasswordVisiblity}
          />
        )}
      </InputContainer>
      <div className="inputErrors">{!!error && <span>{error}</span>}</div>
    </Container>
  );
};
