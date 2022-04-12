import { NavBar } from "../../components/navBar";
import { RecordContainer } from "./style";
import { FormRecord } from "../../components/formRecord";
import {
  HomeContainerMain,
  HomeContent,
  HomeImageBackground,
} from "../home/style";

export const Record = () => {
  return (
    <>
      <HomeContainerMain>
        <NavBar />
        <HomeImageBackground />
        <HomeContent>
          {/* <div className="search">
            <input name="search" placeholder="ID do paciente" />
            <button>Historico</button>
          </div> */}
          <FormRecord />
        </HomeContent>
      </HomeContainerMain>
      {/* <RecordContainer>
        <NavBar />
        <div className="search">
          <input name="search" placeholder="ID do paciente" />
          <button>Historico</button>
        </div>
        <FormRecord />
      </RecordContainer> */}
    </>
  );
};
