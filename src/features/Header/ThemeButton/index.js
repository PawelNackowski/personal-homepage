import ToggleOffLight from "../../../common/images/ToggleOff-light.svg";
import { ThemeModeButton, ModeButton } from './styled';

export const ThemeButton = () => {
  return (
      <ThemeModeButton>
        DARK MODE OFF
        <ModeButton>
          <img src={ToggleOffLight} alt="Toggle" />
        </ModeButton>
      </ThemeModeButton>
  )
};