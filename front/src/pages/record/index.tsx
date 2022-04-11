import { NavBar } from "../../components/navBar";
import { RecordContainer } from "./style";
import { Button } from "../../components/button";
import { FormRecord } from "../../components/formRecord";

export const Record = () => {
  return (
    <>
      <RecordContainer>
        <NavBar />
        <div className="search">
          <input name="search" placeholder="ID do paciente" />
          <button>Historico</button>
        </div>
        <FormRecord />
      </RecordContainer>
    </>
  );
};
