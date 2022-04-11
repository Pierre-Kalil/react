import styled from "styled-components";

export const FormStyle = styled.form`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: auto;

  button {
    width: 150px;
  }

  @media (min-width: 769px) {
    width: 90%;
    justify-content: center;
    height: 75vh;
  }
`;

export const InputsBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row wrap;
  width: 90%;
  height: auto;
  padding: 5px;

  @media (min-width: 769px) {
    width: 100%;
    height: auto;
  }
`;

export const RecordInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 180px;
  padding: 2px;
  margin: 2px;
  background: var(--white);
  border-radius: 5px;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.2);

  input {
    width: 89%;
    margin: 3px;
    padding: 3px;
  }

  textarea {
    width: 90%;
  }
  select {
    width: 90%;
    padding: 2px;
  }

  .input-first {
    width: 90%;
    max-height: 80px;
    overflow-y: scroll;

    ::-webkit-scrollbar {
      display: none;
    }
    input {
      width: 89%;
    }
    svg {
      width: 20px;
      height: 20px;
      transform: translateY(5px);
      color: var(--green);
    }
  }

  .title {
    width: 100%;
    background: #ccc;
    color: var(--dark);
    text-align: left;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  @media (min-width: 769px) {
    width: 400px;
    height: 200px;
  }
`;
