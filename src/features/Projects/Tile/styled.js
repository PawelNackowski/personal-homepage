import styled from "styled-components";

export const List = styled.ul`
  max-width: 1215px;
  margin: 24px 0 120px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  list-style: none;
  padding: 0;
  grid-gap: 32px;
`;

export const Header = styled.h2`
  margin: 0;
  font-size: 24px;
  color: ${({ theme }) => theme.color.blue};
`;

export const Descroption = styled.div`
  margin: 24px 0 16px 0;
`;

export const Link = styled.a`
  margin-top: 8px;
`;