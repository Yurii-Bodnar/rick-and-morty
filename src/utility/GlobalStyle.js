import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${p => p.theme.fonts.main};
    margin: 0 auto;
    font-weight: ${p => p.theme.fontWeights.s};
     margin:0;

  }
  ul, li, h1, h2, h3, h4, p, button, img  {
     padding: 0;
     margin:0;
  cursor: default;

  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;