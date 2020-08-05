import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #F2C1E5;
  }

  h2,h3 {
    color: white;
  }
  
::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
}

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    font-family: 'Lato';
    -webkit-font-smoothing: antialiased;
  }
`;

export default GlobalStyles;
