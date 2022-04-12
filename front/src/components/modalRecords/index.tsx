import { useRecord } from "../../providers/record";
import { ModalStyle } from "./style";

export const ModalRecords = () => {
  const { patientRecords } = useRecord();

  return (
    <>
      <ModalStyle></ModalStyle>
    </>
  );
};
