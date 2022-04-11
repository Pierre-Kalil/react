import { useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { RecordInfo } from "./style";
import { InputFieldProps, InputModelProps } from "./types";

export const InputModel = ({ children, title }: InputModelProps) => {
  const [inputFields, setInputFields] = useState<InputFieldProps[]>([
    {
      type: "text",
      name: "problem",
      placeholder: "Problema",
    },
  ]);
  const handleInputCreate = () => {
    const newfield = { type: "text", name: "problem", placeholder: "Problema" };
    setInputFields([...inputFields, newfield]);
  };
  return (
    <>
      <RecordInfo className="record-info">
        <span className="title">{title}</span>
        <div className="input-first">
          {inputFields.map((item, index) => (
            <input type="text" placeholder="Problema" required />
          ))}
          <FiPlusCircle onClick={handleInputCreate} />
        </div>
        <select required>
          <option></option>
          <option>Ativo</option>
          <option>Encerrado</option>
        </select>
        <textarea placeholder="Observação" rows={3} cols={31} required />
      </RecordInfo>
    </>
  );
};
