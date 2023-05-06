import { ThemeModeButton, ModeButton, Wrapper, ButtonWrapper } from "./styled";
import { selectDarkTheme, toggleTheme } from "./themeSlice";
import { useDispatch, useSelector } from "react-redux";

export const ThemeButton = () => {
  const dispatch = useDispatch();
  const isDarkTheme = useSelector(selectDarkTheme);
  return (
    <ThemeModeButton onClick={() => dispatch(toggleTheme())}>
      DARK MODE {isDarkTheme ? "ON" : "OFF"}
      <Wrapper>
        <ButtonWrapper moveToRight={isDarkTheme}>
          <ModeButton />
        </ButtonWrapper>
      </Wrapper>
    </ThemeModeButton>
  );
};