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
import { useRecord } from "../../providers/record";
import { ModalRecords } from "../../components/modalRecords";

export const Record = () => {
  const { filterRecords, openModal, setOpenModal } = useRecord();
  const { filterUser, patient, patientID } = useUser();
  const [seletcted, setSelected] = useState("");

  const handleId = () => {
    localStorage.setItem("@CliniMed:patientID", seletcted);
    filterUser();
  };

  const handleModal = () => {
    filterRecords(patientID);
    setOpenModal(true);
  };

  useEffect(() => {
    // localStorage.setItem("@CliniMed:patientID", JSON.stringify(seletcted));
    filterUser();
  }, [seletcted]);

  return (
    <>
      <HomeContainerMain>
        {openModal ? <ModalRecords /> : <></>}
        <NavBar />
        <HomeImageBackground />
        <HomeContent>
          <RecordContainer>
            <div className="search">
              {patient.name.length > 0 ? (
                <div className="search patient-box">
                  <span>{patient.name}</span>
                  <Button name="Consultas" callback={handleModal}>
                    Consultas
                  </Button>
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
