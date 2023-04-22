import styled from "styled-components";
import { ReactComponent as instagram } from "../../common/images/Instagram.svg";
import { ReactComponent as github } from "../../common/images/Github.svg";
import { ReactComponent as linkedIN } from "../../common/images/LinkedIN.svg";
import { ReactComponent as facebook } from "../../common/images/Facebook.svg";


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
  gap: 24px;
  margin-top: 56px;
`

export const Instagram = styled(instagram)`
  width: 45px;
  height: auto;
  filter: grayscale(100%) brightness(50%);

  :hover{
    filter: grayscale(0%);
  }
`
export const Github = styled(github)`
  width: 45px;
  height: auto;
    filter: grayscale(100%) brightness(50%);

  :hover{
    filter: grayscale(0%);
  }
`
export const LinkedIN = styled(linkedIN)`
  width: 45px;
  height: auto;
  filter: grayscale(100%) brightness(50%);


  :hover{
    filter: grayscale(0%);
  }
`
export const Facebook = styled(facebook)`
  background-size: 45px;
  width: 45px;
  height: auto;
    filter: grayscale(100%) brightness(50%);

  :hover{
    filter: grayscale(0%)brightness(100%);
  }
`