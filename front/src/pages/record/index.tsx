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
import { UserProps } from "../../providers/user/types";

export const Record = () => {
  const { filterUser, patientID, setPatientID } = useUser();
  const [patientSelect, setPatientSelect] = useState<string | any>(
    localStorage.getItem("patient")
  );
  const handleUser = (id: string) => filterUser(id);
  return (
    <>
      <HomeContainerMain>
        <NavBar />
        <HomeImageBackground />
        <HomeContent>
          <RecordContainer>
            <div className="search">
              {patientSelect ? (
                <div className="search patient-box">
                  <span>Paciente:</span>
                  <span>{patientSelect}</span>
                </div>
              ) : (
                <></>
              )}
              <div className="search input">
                <input
                  value={patientID}
                  onChange={(e) => setPatientID(e.target.value)}
                  name="search"
                  placeholder="ID do paciente"
                />
                <Button name="Buscar" callback={() => handleUser(patientID)}>
                  Buscar
                </Button>
              </div>
            </div>
            <FormRecord patientSelect={patientSelect} />
          </RecordContainer>
        </HomeContent>
      </HomeContainerMain>
    </>
  );
};
