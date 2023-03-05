import { Wrapper, Header, Body } from "./styled";

export const Container = ({ title, body }) => {
  return (
    <>
      <Wrapper>
        <Header>
          {title}
        </Header>
        <Body>
          {body}
        </Body>
      </Wrapper>
    </>
  )
}