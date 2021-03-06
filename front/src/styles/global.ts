import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Heebo', sans-serif;
    font-weight: normal;
  }

  :root{
    --blue: #007bff;
    --green: #28a745;
    --teal: #20c997;
    --darkGreen: #00a09a;
    --white: #ffffff;
    --dark: #343a40;
    --orange: #fd7e14;
    --grayStandOut: #7E7E7E;
    --gray: #ccc;
    --warning: #ffc107;
  }

  li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  button{
    cursor: pointer;
  }
  svg{
    cursor: pointer;
  }
  img {
    cursor: pointer;
  }
`;
