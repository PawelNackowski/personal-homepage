import { ThemeModeButton, ModeButton, Wrapper } from './styled';

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