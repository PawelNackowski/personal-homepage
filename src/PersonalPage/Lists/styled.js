import styled from "styled-components";

export const ListItem = styled.li`
  display: flex;
  padding: 8px;
  font-size: 18px;

  ::before {
    content: "•";
    color: ${({ theme }) => theme.color.blue};
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 16px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMedium}px) {
    font-size: 14px;
  }
`;