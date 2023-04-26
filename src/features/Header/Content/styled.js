import styled from "styled-components";
import {ReactComponent as message} from "../../../common/Container/Message.svg";

export const Wrapper = styled.div`
  align-self: center;
`

export const Header = styled.h1`
  color: ${({theme}) => theme.color.black};
`

export const Text = styled.div`
  font-size: 20px;
`

export const MessageIcon = styled(message)`
  width: 20px;
  height: 18px;
`
export const ButtonLink = styled.a`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: ${({theme}) => theme.color.white};
  font-size: 20px;
  text-decoration: none;
  width: 154px;
  height: 49px;
  margin-top: 32px;
  padding: 12px;
  background-color: ${({theme}) => theme.color.blue};
  border: 1px ${({theme}) => theme.color.darkGray};
  border-radius: 4px;
  transition: 0.5s;

  &:hover {
    box-shadow: 2px -2px 0px #8CC2FF, -2px 2px 0px #8CC2FF, 2px 2px 0px #8CC2FF, -2px -2px 0px #8CC2FF;
  }

  &:active {
    box-shadow: inset 0px 2px 0px rgba(20, 70, 32, 0.2);
  }
`