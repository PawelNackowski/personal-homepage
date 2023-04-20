import { Container, Content, Facebook, Github, Header, Icon, Instagram, LinkedIN} from "./styled"

export const Footer = () => {
  return (
    <>
      <Container>
        LETS TALK!
        <Header>pawelnackowski@gmail.com</Header>
        <Content>
          I'm always open to new projects whenever I have the time. If you have a <br/>
          website, dashboard or mobile app in mind and need some help to<br/>
          make your ideas come to life, feel free to conatct me<br/>
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