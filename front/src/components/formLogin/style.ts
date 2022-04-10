import styled from "styled-components";

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 50px;

  width: 80%;
  height: 250px;

  border-radius: 5px;

  a {
    text-decoration: none;
    color: var(--white);
  }

  @media only screen and (min-width: 767px) {
    width: 350px;
  }
`;

export const LinkBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding-bottom: 5px;
`;
