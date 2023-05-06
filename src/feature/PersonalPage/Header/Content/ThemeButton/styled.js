import styled, { css } from "styled-components";
import { ReactComponent as toggleLight } from "./toggleLight.svg";

export const ThemeModeButton = styled.div`
  display: flex;
  gap: 12px;
  justify-content: end;
  align-items: center;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 48px;
  height: 26px;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.colors.switchTheme.background};
  border: 1px solid rgba(209, 213, 218, 0.3);
  justify-content: center;
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  border-radius: 100%;
  display: flex;
  background: ${({ theme }) => theme.colors.switchTheme.backgroundIcon};
  padding: 4px;
  margin: 2px;
  width: 20px;
  height: 20px;
  transition: transform 0.3s;

  ${({ moveToRight }) => moveToRight && css`
    transform: translateX(110%)`};
`;
export const ModeButton = styled(toggleLight)`
  align-self: center;
  fill: ${({ theme }) => theme.colors.switchTheme.icon};
`;