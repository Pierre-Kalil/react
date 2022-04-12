import styled from "styled-components";

export const FormStyle = styled.div`
  background: #fff;
  padding: 0;
  display: block;
  margin: 0 auto;
  border-radius: 18px;
  box-shadow: 8px 8px 24px #ccc;
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
