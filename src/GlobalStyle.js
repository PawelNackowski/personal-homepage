import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
    background-color: ${({ theme }) => theme.color.lightGray};
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    color: ${({ theme }) => theme.color.black};
    max-width: 1216px;
    margin: 0 auto;
  }
  `;