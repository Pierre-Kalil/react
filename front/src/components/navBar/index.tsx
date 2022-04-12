import { useAuth } from "../../providers/auth";
import { Mobile } from "./mobile";
import { Nav } from "./style";

export const NavBar = () => {
  const { user } = useAuth();
  return (
    <>
      <Nav>
        <div>
          {user.name.length < 1 ? <>ClinMed</> : <>Olá, {user.name} </>}
        </div>
        <Mobile />
      </Nav>
    </>
  );
};
