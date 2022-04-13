import styled from "styled-components";

export const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  height: 450px;
  margin: 5px;
  padding: 10px 15px;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
  background-color: var(--white);
  color: var(--dark);

  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;

    h2 {
      color: var(--orange);
    }
  }
`;
