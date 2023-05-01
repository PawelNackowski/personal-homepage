import styled from "styled-components";

export const Container = styled.div`
  margin: 0 16px 109px 16px;
  max-width: 670px;
`;
export const Header = styled.h2`
  cursor: pointer;
`;
export const HeaderLink = styled.a`
  font-size: 32px;
  color: ${({ theme }) => theme.color.black};
  text-decoration: none;

  :hover {
    color: ${({ theme }) => theme.color.blue};
  }

  :active {
    color: ${({ theme }) => theme.color.lightBlue};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 22px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMedium}px) {
    font-size: 18px;
  }
`;
export const Content = styled.div`
  font-size: 18px;
  color: ${({ theme }) => theme.color.black};
  line-height: 25px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 14px;
    line-height: 17px;
  }
`;