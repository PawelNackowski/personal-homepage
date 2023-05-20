import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  flex-wrap: wrap;
  min-height: 40px;
  width: auto;
    background-color: ${({ theme }) => theme.colors.section.background};
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;
  transition: background-color 0.3s;
  margin-top: 16px;

  @media (max-width: ${({theme}) => theme.breakpoints.mobileMax}px) {
    justify-content: center;
    margin: 
  }
`;

export const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  color: white;
  border-radius: 5px;
  height: 30px;
  padding: 10px;
  margin: 12px;

  color: ${({ theme }) => theme.colors.buttonLink.text};
  font-size: 14px;
  text-decoration: none;
  background-color: ${({ theme }) => theme.colors.buttonLink.background};
  border: 1px teal;
  border-radius: 4px;
  transition: 0.5s;

  &:hover {
    box-shadow: 2px -2px 0 #8cc2ff, -2px 2px 0 #8cc2ff, 2px 2px 0 #8cc2ff,
      -2px -2px 0 #8cc2ff;
  }

  &:active {
    box-shadow: inset 0 2px 0 rgba(20, 70, 32, 0.2);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 12px 6px 12px 6px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMedium}px) {
    font-size: 10px;
    margin: 10px 6px 10px 6px;
  }
`;