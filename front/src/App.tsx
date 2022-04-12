import GlobalStyle from "./styles/global";
import { MainRoutes } from "./routes";
import toast, { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <GlobalStyle />
      <MainRoutes />
      <Toaster />
    </>
  );
}

export default App;
