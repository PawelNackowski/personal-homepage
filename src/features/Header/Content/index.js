import { Button, Header, Text, Wrapper } from "./styled";
import Message from "../../../common/images/Message.svg"
import { ThemeButton } from "../ThemeButton";

export const Content = () => {
  return (
    <>
      <Wrapper>
        <ThemeButton />
        THIS IS
        <Header>
          Paweł Nackowski
        </Header>
        <Text>
          👨🏻 💻 I'm a passionate Frontend Developer, i feel great in React.<br />
          Currently looking for new job offers and interesting projects.
        </Text>
        <Button>
          <img src={Message} alt="logo"></img>
          Hire Me
        </Button>
      </Wrapper>
    </>
  )
};
