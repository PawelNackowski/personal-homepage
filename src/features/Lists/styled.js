import styled from "styled-components";

export const ListItem = styled.li`
  padding: 8px;
  padding-left: 0;
  font-size: 18px;
  
    &::marker {
      color: ${({ theme }) => theme.color.blue};
    }
`