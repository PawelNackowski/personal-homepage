import { Button, Header, Text, Wrapper, ThmemeModeButton, ModeButton } from "./styled";
import Message from "../../../common/images/Message.svg"
import ToggleOffLight from "../../../common/images/ToggleOff-light.svg"

export const Content = () => {
  return (
    <>
      <Wrapper>
        <ThmemeModeButton>DARK MODE OFF<ModeButton><img src={ToggleOffLight} alt="Toggle" /></ModeButton> </ThmemeModeButton> 
        THIS IS
        <Header>
          Paweł Nackowski
        </Header>
        <Text>
          👨🏻‍💻 I’m a passionate Frontend Developer in love with React,<br />
          currently looking for new job opportunities.
        </Text>
        <Button>
          <img src={Message} alt="logo"></img>
          Hire Me
        </Button>
      </Wrapper>
    </>
  )
};
