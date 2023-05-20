import styled from "styled-components";
import { ReactComponent as GitHubIcon } from "../Socials/Github.svg";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px;
`;

export const Header = styled.div`
  font-weight: 900;
  font-size: 30px;
  line-height: 36px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.header.primary};
  margin-bottom: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMedium}px) {
    font-size: 26px;
    line-height: 22px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 18px;
    line-height: 22px;
  }
`;

export const SubHeader = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.header.primary};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 18px;
  }
`;

export const GitHubRepoIcon = styled(GitHubIcon)`
  width: 40px;
  height: auto;
  margin-bottom: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 36px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMedium}px) {
    width: 30px;
  }
`;
