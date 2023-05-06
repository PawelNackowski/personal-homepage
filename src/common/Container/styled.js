import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.section.background};
  padding: 32px;
  margin: 64px 14px 0 14px;
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;
  transition: background-color 0.3s;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 16px;
    margin-top: 48px;
  }
`;

export const Header = styled.h2`
  color: ${({ theme }) => theme.colors.section.header};
  margin-top: 0;
  font-size: 30px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.section.underline};
  padding-bottom: 15px;
  letter-spacing: 0.05em;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 22px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMedium}px) {
    font-size: 18px;
  }
`;

export const Body = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMedium}px) {
    grid-template-columns: 1fr;
  }
`;