import React from "react";
import { PersonalPage } from "./PersonalPage";
import { ThemeProvider } from "styled-components";
import { dark, light } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import { useSelector } from "react-redux";
import { selectDarkTheme } from "./PersonalPage/Header/Content/ThemeButton/themeSlice";

function App() {
  const darkTheme = useSelector(selectDarkTheme);
  return (
    <ThemeProvider theme={darkTheme ? dark : light}>
      <GlobalStyle />
      <PersonalPage />
    </ThemeProvider>
  );
}

export default App;