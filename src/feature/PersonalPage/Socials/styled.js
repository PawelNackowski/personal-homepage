import styled from "styled-components";

export const IconLink = styled.a`
  & > svg > path {
    fill: ${({ theme }) => theme.colors.socials.primary};
    transition: 0.2s;
  }

  &:hover > svg > path {
    fill: ${({ theme }) => theme.colors.socials.hover};
  }

  &:active > svg > path {
    fill: ${({ theme }) => theme.colors.socials.active};
  }
`;
export const StyledSocials = styled.div`
  padding-top: 56px;
  display: flex;
  gap: 24px;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding-top: 40px;
    gap: 16px;
  }
`;

export const styledIcon = (Icon) => styled(Icon)`
  width: 48px;
  height: 48px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 32px;
    height: 32px;
  }
`;