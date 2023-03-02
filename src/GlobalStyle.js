import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
    background-color: ${({ theme }) => theme.color.mercury};
    font-family: 'Inter', sans-serif;
    color: ${({ theme }) => theme.color.tundora};
  }
  `;