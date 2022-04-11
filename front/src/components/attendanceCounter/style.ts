import styled from "styled-components";

export const StatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 85vh;
  height: auto;
  margin-top: 80px;

  .circle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 120px;
    margin: 5px;
    border: 2px solid var(--teal);
    border-radius: 50%;
    color: var(--warning);
    font-size: 24px;
    font-weight: bold;
  }
  span {
    color: var(--warning);
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    .circle {
      width: 200px;
      height: 200px;
      font-size: 34px;
    }
  } ;
`;
