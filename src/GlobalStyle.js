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
    color: ${({ theme }) => theme.color.veryLightBlue};
    max-width: 1216px;
    margin: 0 auto;
    letter-spacing: 0.05em;
    word-break: break-word;
  }
`;