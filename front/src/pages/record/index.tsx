import { NavBar } from "../../components/navBar";
import { RecordContainer } from "./style";
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
import { FormRecordNew } from "../../components/formRecordnew";

export const Record = () => {
  const {
    filterRecords,
    openModal,
    setOpenModal,
    setOpenModalForm,
    openModalForm,
  } = useRecord();
  const { filterUser, patient } = useUser();
  const [seletcted, setSelected] = useState("");

  const handleId = () => {
    localStorage.setItem("@CliniMed:patientID", JSON.stringify(seletcted));
    setSelected("");
  };

  const handleModal = () => {
    filterRecords(
      JSON.parse(localStorage.getItem("@CliniMed:patientID") || "")
    );
    setOpenModal(true);
  };

  useEffect(() => {
    filterUser();
  }, [seletcted]);
  console.log(patient);
  return (
    <>
      <HomeContainerMain>
        {openModal ? <ModalRecords /> : <></>}
        {openModalForm ? <FormRecordNew /> : <></>}
        <NavBar />
        <HomeImageBackground />
        <HomeContent>
          <RecordContainer>
            <div className="search">
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
              {patient ? (
                <div className="search patient-box">
                  <span>{patient}</span>
                  <Button name="Prontuários" callback={handleModal}>
                    Consultas
                  </Button>
                  <Button
                    name="Novo Prontuário"
                    callback={() => setOpenModalForm(true)}
                  >
                    Consultas
                  </Button>
                </div>
              ) : (
                <></>
              )}
            </div>
          </RecordContainer>
        </HomeContent>
      </HomeContainerMain>
    </>
  );
};
