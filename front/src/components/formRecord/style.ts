import styled from "styled-components";

export const FormStyle = styled.div`
  background: #fff;
  padding: 0;
  display: block;
  margin: 0 auto;
  border-radius: 18px;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.2);
  max-width: 80%;
  position: relative;
  overflow: hidden;

  .fields-container {
    padding: 24px 24px 40px;
    width: 100%;

    input {
      padding: 10px;
      margin: 5px 0;
    }
    textarea {
      width: 100%;
      padding: 10px;
      margin: 5px 0;
    }
    select {
      width: 100%;
      padding: 10px;
    }
  }
`;

export const FormBlock = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
`;
