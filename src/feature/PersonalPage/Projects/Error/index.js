import { Button, DangerIcon, StyledContent, StyledHead, Wrapper } from "./styled";
import { github } from "../../../../namePlate";

export const Error = () => (
  <Wrapper>
    <DangerIcon />
    <StyledHead>
      Ooops! Something went wrong...
    </StyledHead>
    <StyledContent>
      Sorry, failed to load Github projects.<br />
      You can check them directly on Github.
    </StyledContent>
    <Button href={github} target="_blank" rel="noreferrer">Go to Github</Button>
  </Wrapper>
);
