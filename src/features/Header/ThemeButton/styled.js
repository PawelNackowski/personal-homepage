import styled from "styled-components"
import {ReactComponent as toggleLight} from "../../../common/Container/toggleLight.svg";

export const ThemeModeButton = styled.div`
  display: flex;
  gap: 12px;
  justify-content: end;
  align-items: center;
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 48px;
  height: 26px;
  border-radius: 25px;
  background-color: ${({theme}) => theme.color.gray};
  border: 1px solid rgba(209, 213, 218, 0.3);
  justify-content: center;
  cursor: pointer;
`

export const ModeButton = styled(toggleLight)`
  align-self: flex-start;
  width: 20px;
  height: 20px;
  background-color: ${({theme}) => theme.color.veryLightBlue};
  border-radius: 50%;
  padding: 4px;
  margin: 2px;
  transition: 0.3s;

  :active {
    transform: translateX(110%);
  }
`