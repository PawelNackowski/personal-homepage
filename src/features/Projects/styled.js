import styled from "styled-components";
import { ReactComponent as GitHubIcon } from "../Socjals/Github.svg";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  font-weight: 900;
  font-size: 30px;
  line-height: 36px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.black};
  margin-bottom: 8px;

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
  color: ${({ theme }) => theme.color.black};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 17px;
  }
`;

export const GitHubRepoIcon = styled(GitHubIcon)`
  width: 40px;
  height: auto;
  margin-bottom: 12px;
`;