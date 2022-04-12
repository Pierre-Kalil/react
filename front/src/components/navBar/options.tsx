import { useNavigate } from "react-router-dom";
import { useAuth } from "../../providers/auth";
import { useRecord } from "../../providers/record";
import { MobileProps, Ul } from "./style";

export const Options = ({ open }: MobileProps) => {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();
  const { setAttendanceList } = useRecord();

  const handleSignoup = () => {
    localStorage.clear();
    setAttendanceList([]);
    setUser({ id: "", name: "", email: "" });
    navigate("/");
  };

  return (
    <>
      <Ul open={open}>
        {user.name.length > 1 ? (
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
