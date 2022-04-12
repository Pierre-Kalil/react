import { NavBar } from "../../components/navBar";
import { RecordContainer } from "./style";
import { FormRecord } from "../../components/formRecord";
import {
  HomeContainerMain,
  HomeContent,
  HomeImageBackground,
} from "../home/style";
import { Button } from "../../components/button";
import { useUser } from "../../providers/user";
import { useState } from "react";

export const Record = () => {
  const { filterUser } = useUser();
  const [userID, setUserID] = useState("");
  const handleUser = (id: string) => filterUser(id);
  return (
    <>
      <HomeContainerMain>
        <NavBar />
        <HomeImageBackground />
        <HomeContent>
          <RecordContainer>
            <div className="search">
              <input
                value={userID}
                onChange={(e) => setUserID(e.target.value)}
                name="search"
                placeholder="ID do paciente"
              />
              <Button name="Buscar" callback={() => handleUser(userID)}>
                Buscar
              </Button>
            </div>
            <FormRecord />
          </RecordContainer>
        </HomeContent>
      </HomeContainerMain>
    </>
  );
};
