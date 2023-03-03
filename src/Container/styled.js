import styled from "styled-components";

export const Wrapper = styled.div`
  display: block;
  background-color: ${({ theme }) => theme.color.white};
  padding: 32px;
  max-width: 1216px;
  margin: auto;
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;
`
export const Header = styled.h1`
  margin-top: 0;
  font-size: 30px;
  border-bottom: 1px solid ${({theme}) => theme.color.mischla};
  padding-bottom: 15px;
`