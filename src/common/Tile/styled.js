import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  border: 6px solid rgba(209, 213, 218, 0.3);
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;
  padding: 56px;
  transition: 1s;

    &:hover{
     border: 6px solid rgba(3, 102, 214, 0.2);
      box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
    }
`

export const Header = styled.h2`
  margin: 0;
  font-size: 24px;
  color: ${({ theme }) => theme.color.blue};
`

export const Descroption = styled.div`
  margin: 24px 0 16px 0;
`

export const Link = styled.div`
  margin-top: 8xp;
`