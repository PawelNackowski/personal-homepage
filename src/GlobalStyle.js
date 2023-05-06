import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
    background-color: ${({ theme }) => theme.colors.content.background};
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.content.text};
    max-width: 1216px;
    margin: 0 auto;
    letter-spacing: 0.05em;
    word-break: break-word;
    transition: background-color 0.5s;
  }
`;