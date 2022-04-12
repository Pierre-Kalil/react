import styled from "styled-components";

export const ModalStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  min-height: 100vh;
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
`;
