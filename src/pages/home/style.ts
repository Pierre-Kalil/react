import styled from "styled-components";
import home from "../../assets/home.jpg";

export const HomeContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  background: rgba(0, 123, 245, 100);
  z-index: 1;
  position: relative;
`;

export const HomeImageBackground = styled.div`
  height: 100vh;
  background-image: url(${home});
  background-size: cover;
  opacity: 0.1;
  z-index: 0;
  @media (max-width: 500px) {
    background-position: center;
  }
`;

export const HomeContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  position: absolute;

  .title {
    text-align: center;
    h1 {
      font-size: 50px;
      font-weight: bold;
      color: var(--teal);
    }
    h2 {
      color: var(--white);
    }
  }
`;
