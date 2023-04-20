import { ThemeModeButton, ModeButton, Wrapper, ToggleLight } from './styled';

export const ThemeButton = () => {
  return (
      <ThemeModeButton>
        DARK MODE OFF
        <Wrapper>
        <ModeButton />
        </Wrapper>
      </ThemeModeButton>
  )
};