import { Wrapper, Header, Body } from "./styled";

export const Section = ({ title, body }) => (
  <Wrapper>
    <Header>
      {title}
    </Header>
    <Body>
      {body}
    </Body>
  </Wrapper>
);