import { download } from "../../../../namePlate";
import { Button, Wrapper } from "./styled";

export const HeaderLink = (name) => (
  <Wrapper>
    {download.map(({ name, link }) => (
      <Button href={link} download>
        {name}
      </Button>
    ))}
  </Wrapper>
);
