import { Socials } from "../Socjals";
import { email, footerContent } from "../../../namePlate";
import { Container, Content, Header, HeaderLink } from "./styled";

export const Footer = () => (
  <Container>
    LETS TALK!
    <Header>
      <HeaderLink href={`mailto:${email}`}>
        {email}
      </HeaderLink>
    </Header>
    <Content>
      {footerContent}
    </Content>
    <Socials />
  </Container>
);