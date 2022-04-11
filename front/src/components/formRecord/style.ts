import styled from "styled-components";

export const FormStyle = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    width: 70%;
  }
`;

export const InputsBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row wrap;
  width: 90%;
  height: 70vh;

  .record-info {
    width: 300px;
    height: 150px;
    margin: 2px;
    background: var(--white);

    .title {
      width: 100%;
      background: #ccc;
      text-align: left;
    }
  }
`;
