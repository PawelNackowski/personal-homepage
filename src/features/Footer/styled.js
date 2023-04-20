import styled from "styled-components";
import instagram from "../../common/images/Instagram.svg";
import github from "../../common/images/Github.svg";
import facebook from "../../common/images/Facebook.svg";
import linkedIN from "../../common/images/LinkedIN.svg";

export const Container = styled.div`
  margin: 120px 0 109px 0;
  max-width: 670px;
`

export const Header = styled.h2`
  color: ${({theme}) => theme.color.black};
  font-size: 32px;
`

export const Content = styled.div`
  font-size: 18px;
  color: ${({theme}) => theme.color.black};
  line-height: 25px;
`

export const Icon = styled.div`
  display: flex;
  margin-top: 56px;
`

export const Instagram = styled.div`
display: block;
  background-image: url(${instagram});
  background-repeat: no-repeat ;
  background-size: 45px;
  width: 45px;
  height: 45px;
  margin-right: 24px;
`
export const Github = styled.div`
display: block;
  background-image: url(${github});
  background-repeat: no-repeat ;
  background-size: 45px;
  width: 45px;
  height: 45px;
  margin-right:24px;
`
export const LinkedIN = styled.div`
display: block;
  background-image: url(${linkedIN});
  background-repeat: no-repeat ;
  background-size: 45px;
  width: 45px;
  height: 45px;
`
export const Facebook = styled.div`
display: block;
  background-image: url(${facebook});
  background-repeat: no-repeat ;
  background-size: 45px;
  width: 45px;
  height: 45px;
`


