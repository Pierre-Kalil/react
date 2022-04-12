import { useAuth } from "../../providers/auth";
import { Mobile } from "./mobile";
import { Nav } from "./style";

export const NavBar = () => {
  const { user } = useAuth();
  return (
    <>
      <Nav>
        <div>
          {user.name.length === 0 ? (
            <>
              <h2>ClinMed</h2>
            </>
          ) : (
            <>
              Olá, <h2>{user.name}</h2>{" "}
            </>
          )}
        </div>
        <Mobile />
      </Nav>
    </>
  );
};
