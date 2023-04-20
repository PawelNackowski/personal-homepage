import styled from "styled-components"

export const ThemeModeButton = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
`

export const ModeButton = styled.div`
  width: 48px;
  height: 26px;
  margin: 12px;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.color.gray};
  border: 1px solid rgba(209, 213, 218, 0.3);
`