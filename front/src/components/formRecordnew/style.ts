import styled from "styled-components";

export const FormRecordStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  min-height: 100vh;
  height: auto;
  background: var(--grayStandOut);
  z-index: 5;
  position: absolute;

  svg {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 10px;
    right: 10px;
    color: var(--white);
  }

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 30px;

    textarea {
      width: 100%;
      height: 80px;
      padding: 15px;
      margin: 5px 0;
      border: 2px solid var(--white);
      border-radius: 5px;
      background: transparent;
      color: var(--white);

      ::placeholder {
        color: var(--white);
      }
    }

    select {
      width: 100%;
      padding: 15px;
      margin: 5px 0;
      border: 2px solid var(--white);
      border-radius: 5px;
      background: transparent;
      color: var(--white);

      option {
        background: transparent;
        color: var(--white);
        padding: 15px;
      }
    }

    .title {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      min-height: 150px;
      margin: 2px;
      padding: 2px;

      overflow-y: scroll;

      ::-webkit-scrollbar {
        display: none;
      }

      span {
        font-weight: bold;
      }

      h2 {
        color: var(--black);
        background: var(--white);
        margin: 5px 0;
        padding: 1px;
      }

      .inputErrors {
        color: var(--warning);
        margin-top: 5px;
        font-size: 12px;
        text-align: center;
      }

      @media (min-width: 768px) {
        width: 48%;
        min-height: 200px;
        margin-top: 30px;
      }
    }
    .footer {
      display: flex;
      justify-content: center;
      width: 100%;
      button {
        width: 90%;
        background: var(--orange);
      }
      @media (min-width: 768px) {
        justify-content: flex-end;
        button {
          width: 200px;
          color: var(--white);
          margin-right: 15px;
        }
      }
    }
    @media (min-width: 768px) {
      margin-top: 5px;
    }
  }
`;
