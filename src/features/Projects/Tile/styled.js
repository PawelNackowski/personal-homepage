import styled from "styled-components";

export const List = styled.div`
  max-width: 1215px;
  margin: 24px 0 120px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 0;
  grid-gap: 32px;
`;

export const Header = styled.h2`
  margin: 0;
  font-size: 24px;
  color: ${({ theme }) => theme.color.blue};
`;

export const Description = styled.div`
  margin: 24px 0 16px 0;
  font-size: 18px;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.color.blue};
  margin-left: 14px;
  text-decoration: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray};
  transition: 0.5s;

  &:hover {
    color: ${({ theme }) => theme.color.lightBlue};
    border-color: ${({ theme }) => theme.color.lightBlue};

  }
`;

export const WrapperLink = styled.div`
  font-size: 18px;
  display: flex;
  margin-top: 8px;
`;

export const StyledTile = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  background-color: ${({ theme }) => theme.color.white};
  border: 6px solid rgba(209, 213, 218, 0.3);
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;
  padding: 56px;
  transition: 0.5s;

  &:hover {
    border: 6px solid rgba(3, 102, 214, 0.2);
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
  }
`;