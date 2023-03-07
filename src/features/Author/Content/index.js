import { Button, Header, Text, Wrapper } from "./styled";
import Message from "../../../common/images/Message.svg"

export const Content = () => {
  return (
    <>
      <Wrapper>
        This is
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
