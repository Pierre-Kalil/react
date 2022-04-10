import styled from "styled-components";

export const ButtonStyle = styled.button`
  width: 100%;
  padding: 10px;
  background: #00a09a;
  color: #fff;
  border: none;
  border-radius: 2px;
  font-size: 16px;
  font-weight: bold;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.2);

  :hover {
    filter: grayscale(0.2);
    font-weight: bold;
    transition: 0.2s all ease;
  }
  :active {
    background: #bfcff7;
    transition: 0.1s;
  }
`;
