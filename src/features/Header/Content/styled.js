import styled from "styled-components";
import { ReactComponent as message } from "../Message.svg";

export const Wrapper = styled.div`
  align-self: center;
`;

export const Header = styled.h1`
  color: ${({ theme }) => theme.color.black};
`;

export const Text = styled.div`
  font-size: 20px;
`;

export const MessageIcon = styled(message)`
  width: 20px;
  height: 18px;
`;
export const ButtonLink = styled.a`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: ${({ theme }) => theme.color.white};
  font-size: 20px;
  text-decoration: none;
  width: 154px;
  height: 49px;
  margin-top: 32px;
  padding: 12px;
  background-color: ${({ theme }) => theme.color.blue};
  border: 1px ${({ theme }) => theme.color.darkerGray};
  border-radius: 4px;
  transition: 0.5s;

  &:hover {
    box-shadow: 2px -2px 0 #8CC2FF, -2px 2px 0 #8CC2FF, 2px 2px 0 #8CC2FF, -2px -2px 0 #8CC2FF;
  }

  &:active {
    box-shadow: inset 0 2px 0 rgba(20, 70, 32, 0.2);
  }
`;