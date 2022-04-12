import styled from "styled-components";

export const StatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 85vh;
  height: auto;

  .circle {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 150px;
    height: 150px;
    margin: 5px;
    border: 3px solid var(--teal);
    border-radius: 50%;
    color: var(--warning);
    font-size: 24px;
    font-weight: bold;
  }
  .box-circle {
    display: flex;
    align-items: center;
    flex-direction: column;

    span:nth-child(1) {
      font-weight: bold;
    }
  }
  .box-circle:nth-child(3) .circle {
    width: 250px;
    border-radius: 10px;
    overflow-y: scroll;

    ::-webkit-scrollbar {
      display: none;
    }
    span {
      margin-top: 1px;
    }
  }
  span {
    color: var(--warning);
    font-size: 24px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    .circle {
      width: 200px;
      height: 200px;
      font-size: 35px;
    }
  } ;
`;
