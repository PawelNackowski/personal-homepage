import styled from "styled-components";
import { ReactComponent as message } from "../Message.svg";

export const Wrapper = styled.div`
  align-self: center;
  font-size: 16px;
`;

export const Header = styled.h1`
  color: ${({ theme }) => theme.colors.header.primary};
  font-size: 38px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 28px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMedium}px) {
    font-size: 22px;
  }
`;

export const Text = styled.div`
  font-size: 20px;
  line-height: 140%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 17px;
  }
`;

export const MessageIcon = styled(message)`
  width: 20px;
  height: 18px;
`;
export const ButtonLink = styled.a`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: ${({ theme }) => theme.colors.buttonLink.text};
  font-size: 20px;
  text-decoration: none;
  width: 154px;
  height: 49px;
  margin-top: 32px;
  padding: 12px;
  background-color: blue;
  border: 1px teal;
  border-radius: 4px;
  transition: 0.5s;

  &:hover {
    box-shadow: 2px -2px 0 #8CC2FF, -2px 2px 0 #8CC2FF, 2px 2px 0 #8CC2FF, -2px -2px 0 #8CC2FF;
  }

  &:active {
    box-shadow: inset 0 2px 0 rgba(20, 70, 32, 0.2);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 18px;
    width: 138px;
    height: 46px;
    padding: 12px;
  }
`;