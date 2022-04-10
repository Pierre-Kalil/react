import { FormLogin } from "../../components/formLogin";
import { NavBar } from "../../components/navBar";
import {
  HomeContainerMain,
  HomeContent,
  HomeImageBackground,
} from "../home/style";

export const Login = () => {
  return (
    <>
      <HomeContainerMain>
        <NavBar />
        <HomeImageBackground />
        <HomeContent>
          <FormLogin />
        </HomeContent>
      </HomeContainerMain>
    </>
  );
};
