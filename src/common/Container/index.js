import { Wrapper, Header, Body } from "./styled";

export const Container = ({ title, body }) => (
  <Wrapper>
    <Header>
      {title}
    </Header>
    <Body>
      {body}
    </Body>
  </Wrapper>
);