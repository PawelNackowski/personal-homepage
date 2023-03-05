import styled from "styled-components";

export const ListItem = styled.li`
  color: ${({ theme }) => theme.color.lightBlue};
  padding: 8px;
  padding-left: 0;
  font-size: 18px;
  
    &::marker {
      color: ${({ theme }) => theme.color.blue};
    }
`