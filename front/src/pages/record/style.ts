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
    align-items: flex-start;
    color: var(--white);

    span {
      color: var(--white);
      font-weight: bold;
      font-size: 22px;
    }
  }
`;
