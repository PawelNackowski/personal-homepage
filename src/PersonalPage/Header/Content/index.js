import { ButtonLink, Header, MessageIcon, Text, Wrapper } from "./styled";
import { description, name, email } from "../../../namePlate";
import { ThemeButton } from "./ThemeButton";

export const Content = () => (
  <Wrapper>
    <ThemeButton />
    THIS IS
    <Header>
      {name}
    </Header>
    <Text>
      {description}
    </Text>
    <ButtonLink title={email} href={`mailto:${email}`}>
      <MessageIcon />
      Hire Me
    </ButtonLink>
  </Wrapper>
);