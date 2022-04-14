import styled from "styled-components";

export const RecordContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .search {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    margin: 10px 10px;

    input {
      padding: 0.6rem;
      border: none;
      border-radius: 5px;
    }
    button {
      width: 100px;
      height: 33px;
      margin-left: 2px;
      background: var(--teal);
    }
  }
  .patient-box {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 200px;
    height: 150px;
    background: var(--white);
    color: var(--dark);
    border-radius: 5px;

    span {
      align-items: center;
      padding: 4px;
      font-weight: bold;
      font-size: 22px;
    }
    button {
      width: 150px;
      height: 33px;
      margin-left: 2px;
      background: var(--darkGreen);
    }
  }
`;
