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
    margin: 10px 10px;
    height: 100px;

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
  }

  .patient-box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 100px;
    color: var(--white);

    span:nth-child(2) {
      color: var(--teal);
      font-weight: bold;
    }
  }

  .input {
    flex-wrap: wrap;
  }
`;
