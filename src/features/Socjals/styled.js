import styled from "styled-components";

export const IconLink = styled.a`
  & > svg > path {
    fill: ${({ theme }) => theme.color.black};
    transition: 0.2s;
  }

  &:hover > svg > path {
    fill: ${({ theme }) => theme.color.blue};
  }

  &:active > svg > path {
    fill: ${({ theme }) => theme.color.lightBlue};
  }
`;
export const StyledSocials = styled.div`
  padding-top: 56px;
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
`;

export const styledIcon = (Icon) => styled(Icon)`
  width: 48px;
  height: 48px;
`;