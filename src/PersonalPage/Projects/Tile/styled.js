import styled from "styled-components";

export const List = styled.div`
  margin: 24px 0 120px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 0;
  grid-gap: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 16px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMedium}px) {
    grid-template-columns: 1fr;
    grid-gap: 16px;
  }
`;

export const Header = styled.h2`
  margin: 0;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.tile.header};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 16px;
  }
`;

export const Description = styled.div`
  margin: 24px 0 16px 0;
  font-size: 18px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 14px;
  }
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.tile.link};
  margin-left: 14px;
  text-decoration: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.tile.border};
  transition: 0.5s;
}

&:hover {
  color: ${({ theme }) => theme.colors.tile.linkHover};
  border-color: ${({ theme }) => theme.colors.tile.borderHover};

}
`;

export const WrapperLink = styled.div`
  font-size: 18px;
  display: flex;
  margin-top: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 14px;
`;

export const StyledTile = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  background-color: white;
  border: 6px solid rgba(209, 213, 218, 0.3);
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;
  padding: 56px;

  &:hover {
    transition: 0.5s;
    border: 6px solid rgba(3, 102, 214, 0.2);
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 24px;
  }
`;