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

export const HomeContainerSpelcialty = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  min-height: 60vh;
  height: auto;
  background: var(--white);
  z-index: 1;
  color: var(--dark);

  h2 {
    width: 200px;
    font-size: 36px;
    margin-bottom: 10px;
    color: var(--orange);
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    li {
      margin: 10px 0;
      font-size: 20px;
    }
  }

  @media (min-width: 768px) {
    background-position: center;
    height: auto;
  }
`;

export const HomeContainerComments = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  min-height: 60vh;
  height: auto;
  background: rgba(0, 123, 245, 100);
  z-index: 1;
  position: relative;

  img {
    width: 150px;
  }

  .comments {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 250px;
    span {
      width: 120px;
      text-align: center;
      color: var(--white);
    }
  }

  @media (min-width: 425px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
