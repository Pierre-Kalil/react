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

    input {
      padding: 0.5rem;
      border: 1px solid var(--teal);
      border-radius: 5px;
    }
  }
`;
