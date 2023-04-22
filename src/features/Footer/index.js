import { email, footerContent } from "../../namePlate"
import { Container, Content, Facebook, Github, Header, Icon, Instagram, LinkedIN} from "./styled"

export const Footer = () => {
  return (
    <>
      <Container>
        LETS TALK!
        <Header>{email}</Header>
        <Content>
          {footerContent}
        </Content>
        <Icon>
          <Github />
          <Facebook />
          <LinkedIN />
          <Instagram />
        </Icon>
      </Container>
    </>
  )
}