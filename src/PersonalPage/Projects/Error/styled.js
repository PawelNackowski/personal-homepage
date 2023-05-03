import styled from "styled-components";
import { ReactComponent as Danger } from "./Danger.svg";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 96px 16px 0 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: 56px 16px 0 16px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMedium}px) {
    margin: 48px 16px 0 16px;
  }
`;

export const DangerIcon = styled(Danger)`
  width: 36px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMedium}px) {
    width: 32px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 34px;
  }
`;

export const StyledHead = styled.h2`
  text-align: center;
  font-size: 24px;
  color: black;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 22px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMedium}px) {
    font-size: 18px;
  }
`;

export const StyledContent = styled.div`
  text-align: center;
  font-size: 20px;
  line-height: 140%;
  color: black;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 18px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMedium}px) {
    font-size: 12px;
  }
`;

export const Button = styled.a`
  border: none;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.buttonLink.background};
  padding: 12px 16px;
  font-size: 20px;
  line-height: 24px;
  color: white;
  margin: 32px 0 140px 0;
  text-decoration: none;

  :hover {
    background-color: ${({ theme }) => theme.colors.buttonLink.hover};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 18px;
    line-height: 22px;
    padding: 8px 12px;
    margin: 24px 0 96px 0;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMedium}px) {
    font-size: 12px;
    line-height: 16px;
    padding: 4px 8px;
    margin: 16px 0 48px 0;
  }
`;