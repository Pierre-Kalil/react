import { useNavigate } from "react-router-dom";
import { useAuth } from "../../providers/auth";
import { MobileProps, Ul } from "./style";

export const Options = ({ open }: MobileProps) => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleSignoup = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <Ul open={open}>
        {user ? (
          <>
            <li onClick={() => navigate("/dashboard")}>Home</li>
            <li onClick={() => navigate("/record")}>Prontuário</li>
            <li onClick={handleSignoup}>Sair</li>
          </>
        ) : (
          <>
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/login")}>Login</li>
          </>
        )}
      </Ul>
    </>
  );
};
