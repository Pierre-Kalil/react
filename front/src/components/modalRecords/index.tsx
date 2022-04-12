import { useRecord } from "../../providers/record";
import { Card } from "../card";
import { ModalStyle } from "./style";
import { AiFillCloseSquare } from "react-icons/ai";

export const ModalRecords = () => {
  const { patientRecords, setOpenModal } = useRecord();

  return (
    <>
      <ModalStyle>
        <AiFillCloseSquare onClick={() => setOpenModal(false)} />
        {patientRecords && patientRecords.map((item) => <Card record={item} />)}
      </ModalStyle>
    </>
  );
};
