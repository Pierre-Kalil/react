import { HomeContainerMain, HomeContent, HomeImageBackground } from "./style";

export const Home = () => {
  return (
    <HomeContainerMain>
      <HomeImageBackground />
      <HomeContent>
        <div className="title">
          <h2>Conheça</h2>
          <h1>ClincMed</h1>
          <h2>Sua nova clinica médica</h2>
        </div>
      </HomeContent>
    </HomeContainerMain>
  );
};
