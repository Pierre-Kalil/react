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
  }
  .search button {
    width: 100px;
    height: 33px;
    margin-left: 2px;
    background: var(--teal);
  }

  .patient-box {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 300px;
    color: var(--dark);

    span {
      display: flex;
      align-items: center;
      width: 197px;
      padding: 4px;
      transform: translateX(1px);
      background: var(--white);
      border-radius: 5px;
      font-weight: bold;
      font-size: 22px;
    }
  }
`;
