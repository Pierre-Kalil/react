import styled from "styled-components";

export const RecordContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 150vh;
  background: var(--blue);
  position: relative;

  .search {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 150px 0 10px 0;

    input {
      padding: 0.5rem;
      border: 1px solid var(--teal);
      border-radius: 5px;
    }
  }

  .boxForm {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: row wrap;
    width: 90%;
    height: 70vh;
  }

  .record-info {
    width: 300px;
    height: 150px;
    margin: 2px;
    background: var(--white);

    .title {
      width: 100%;
      background: #ccc;
      text-align: left;
    }
  }
`;

export const FormStyle = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    width: 70%;
  }
`;
