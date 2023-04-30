import styled from "styled-components";

export const ListItem = styled.li`
  display: flex;
  padding: 8px 8px 8px 0;
  font-size: 18px;

  ::before {
    content: "•";
    color: ${({ theme }) => theme.color.blue};
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
`;