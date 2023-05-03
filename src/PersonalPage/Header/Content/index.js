import { ButtonLink, Header, MessageIcon, Text, Wrapper } from "./styled";
import { ThemeButton } from "../ThemeButton";
import { description, name, email } from "../../../namePlate";

export const Content = () => {
  return (
    <>
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
    </>
  );
};
