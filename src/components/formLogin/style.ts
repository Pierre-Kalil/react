import styled from "styled-components";

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 80%;
  height: 70%;

  background: rgba(248, 298, 241, 0.8);
  border-radius: 5px;

  .test {
    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 100%;
    height: 100px;

    background: rgba(85, 110, 230, 0.25);
    border-radius: 5px 5px 0 0;

    img {
      width: 100px;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 100%;
  }

  a {
    text-decoration: none;
    color: rgba(85, 110, 230, 1);
  }

  @media only screen and (min-width: 767px) {
    width: 87%;
  }
`;

export const LinkBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding-bottom: 10px;
`;

export const ButtonLogin = styled.button`
  width: 100%;
  padding: 8px;

  border: none;
  border-radius: 5px;
  background: rgba(85, 110, 230, 1);
  color: white;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
`;
