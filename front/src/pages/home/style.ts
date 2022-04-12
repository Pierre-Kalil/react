import styled from "styled-components";
import home from "../../assets/home.jpg";

export const HomeContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: auto;
  background: rgba(0, 123, 245, 100);
  z-index: 1;
  position: relative;

  @media (min-width: 768px) {
    background-position: center;
    height: auto;
  }
`;

export const HomeImageBackground = styled.div`
  min-height: 85vh;
  height: auto;
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
  min-height: 80vh;
  height: auto;
  margin-top: 15vh;

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
    @media (min-width: 768px) {
      h1 {
        font-size: 70px;
      }
    }
  }
  @media (min-width: 768px) {
    min-height: 80vh;
  }
`;
