import { download } from "../../../../namePlate";
import { Button, Wrapper } from "./styled";

export const HeaderLink = () => (
  <Wrapper>
    {download.map(({ name, link }) => (
      <Button key={name} href={link} download>
        {name}
      </Button>
    ))}
  </Wrapper>
);