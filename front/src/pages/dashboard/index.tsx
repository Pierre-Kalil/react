import { AttendanceCounter } from "../../components/attendanceCounter";
import { FormLogin } from "../../components/formLogin";
import { NavBar } from "../../components/navBar";
import {
  HomeContainerMain,
  HomeContent,
  HomeImageBackground,
} from "../home/style";

export const Dashboard = () => {
  return (
    <>
      <HomeContainerMain>
        <NavBar />
        <HomeImageBackground />
        <HomeContent>
          <AttendanceCounter />
        </HomeContent>
      </HomeContainerMain>
    </>
  );
};
