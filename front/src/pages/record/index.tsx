import { NavBar } from "../../components/navBar";
import { RecordContainer } from "./style";
import { FormRecord } from "../../components/formRecord";
import {
  HomeContainerMain,
  HomeContent,
  HomeImageBackground,
} from "../home/style";
import { Button } from "../../components/button";

export const Record = () => {
  return (
    <>
      <HomeContainerMain>
        <NavBar />
        <HomeImageBackground />
        <HomeContent>
          <RecordContainer>
            <div className="search">
              <input name="search" placeholder="ID do paciente" />
              <Button name="Buscar">Buscar</Button>
            </div>
            <FormRecord />
          </RecordContainer>
        </HomeContent>
      </HomeContainerMain>
    </>
  );
};
