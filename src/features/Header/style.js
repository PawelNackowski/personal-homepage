import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 398px 1fr;
  grid-gap: 64px;
  margin: 116px 16px 0 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: 1fr;
    grid-gap: 12px;
    margin-top: 32px
  }
`;