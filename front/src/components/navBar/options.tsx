import { Link, useNavigate } from "react-router-dom";
import { MobileProps, Ul } from "./style";

export const Options = ({ open }: MobileProps) => {
  const navigate = useNavigate();

  const handleSignoup = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <Ul open={open}>
        <li onClick={() => navigate("/")}>Home</li>
        <li onClick={() => navigate("/login")}>Login</li>
        <li onClick={handleSignoup}>Sair</li>
      </Ul>
    </>
  );
};
