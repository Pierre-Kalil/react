import styled from "styled-components";

export const CardStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 90%;
  height: auto;
  min-height: 80vh;
  margin: 35px 0;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
  background-color: var(--white);
  color: var(--dark);

  .title {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    min-height: 150px;
    margin: 2px;
    padding: 2px;

    overflow-y: scroll;

    ::-webkit-scrollbar {
      display: none;
    }

    span {
      font-weight: bold;
    }

    h2 {
      color: var(--black);
      background: var(--gray);
    }

    @media (min-width: 768px) {
      width: 48%;
      min-height: 200px;
    }
  }
`;
