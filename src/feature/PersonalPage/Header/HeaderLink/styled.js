import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 60px;
  width: auto;
    background-color: ${({ theme }) => theme.colors.section.background};
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;
  transition: background-color 0.3s;
  margin-top: 16px;
`;

export const Button = styled.a`
  display: flex;
  align-items: center;
  border: 1px solid black;
  color: white;
  border-radius: 5px;
  height: 30px;
  padding: 10px;
  margin-left: 24px;

  color: ${({ theme }) => theme.colors.buttonLink.text};
  font-size: 15px;
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
`;