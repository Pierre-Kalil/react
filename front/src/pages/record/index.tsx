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
import { useEffect, useState } from "react";
import { UserProps } from "../../providers/user/types";
import { useRecord } from "../../providers/record";
import { useAuth } from "../../providers/auth";

export const Record = () => {
  const { filterRecords } = useRecord();
  const { filterUser, patient, patientID } = useUser();
  const [seletcted, setSelected] = useState("");

  const handleId = () => {
    localStorage.setItem("@CliniMed:patientID", seletcted);
  };

  console.log(patient);
  return (
    <>
      <HomeContainerMain>
        <NavBar />
        <HomeImageBackground />
        <HomeContent>
          <RecordContainer>
            <div className="search">
              {patient.name.length > 0 ? (
                <div className="search patient-box">
                  <span>Paciente:</span>
                  <span>{patient.name}</span>
                  <button onClick={() => filterRecords(patientID)}>
                    Ver Consultas
                  </button>
                </div>
              ) : (
                <></>
              )}
              <div className="search input">
                <input
                  value={seletcted}
                  onChange={(e) => setSelected(e.target.value)}
                  name="search"
                  placeholder="ID do paciente"
                />
                <Button name="Buscar" callback={handleId}>
                  Buscar
                </Button>
              </div>
            </div>
            <FormRecord patientSelect={patient} />
          </RecordContainer>
        </HomeContent>
      </HomeContainerMain>
    </>
  );
};
