import { NavBar } from "../../components/navBar";
import {
  HomeContainerComments,
  HomeContainerMain,
  HomeContainerSpelcialty,
  HomeContent,
  HomeImageBackground,
} from "./style";
import Avatar from "../../assets/man.svg";

export const Home = () => {
  return (
    <>
      <HomeContainerMain>
        <NavBar />
        <HomeImageBackground />
        <HomeContent>
          <div className="title">
            <h2>Conheça</h2>
            <h1>CliniMed</h1>
            <h2>Sua nova clinica médica</h2>
          </div>
        </HomeContent>
      </HomeContainerMain>
      <HomeContainerSpelcialty>
        <div>
          <h2>Nossas especialidades</h2>
        </div>
        <div>
          <ul>
            <li>Cardiologia</li>
            <li>Pneumologista</li>
            <li>Dermatologista</li>
            <li>Clínico geral</li>
          </ul>
        </div>
      </HomeContainerSpelcialty>
      <HomeContainerComments>
        <div className="comments">
          <img src={Avatar} alt="" />
          <span>Excelente atendimento e ótimos profissionais</span>
        </div>
        <div className="comments">
          <img src={Avatar} alt="" />
          <span>Ambiente agradável e bom atendimento, sem filas de espera</span>
        </div>
        <div className="comments">
          <img src={Avatar} alt="" />
          <span>Certamente recomendo, não troco mais de clinica</span>
        </div>
      </HomeContainerComments>
    </>
  );
};
