import styled from "styled-components";
import authorPhoto from "./authorPhoto.jpg";

export const Photo = styled.div`
  background-image: url(${authorPhoto});
  background-position: center;
  background-size: 120%;
  width: 398px;
  height: 398px;
  border-radius: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 256px;
    height: 256px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMedium}px) {
    width: 132px;
    height: 132px;
  }
`;
