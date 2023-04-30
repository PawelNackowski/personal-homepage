import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  padding: 32px;
  margin: 72px auto;
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;
`;

export const Header = styled.h2`
  color: ${({ theme }) => theme.color.black};
  margin-top: 0;
  font-size: 30px;
  border-bottom: 1px solid ${({ theme }) => theme.color.darkerGray};
  padding-bottom: 15px;
`;

export const Body = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;