import styled from "styled-components";

export const Container = styled.div`
  margin: 120px 0 109px 0;
  max-width: 670px;
`
export const Header = styled.h2`
  cursor: pointer;
`
export const HeaderLink = styled.a`
  font-size: 32px;
  color: ${({theme}) => theme.color.black};
  text-decoration: none;
`
export const Content = styled.div`
  font-size: 18px;
  color: ${({theme}) => theme.color.black};
  line-height: 25px;
`