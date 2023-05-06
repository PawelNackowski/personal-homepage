import { Loader, StyledText, Wrapper } from "./styled";

export const Loading = () => (
  <Wrapper>
    <StyledText>
      Please wait, projects are being loaded...
    </StyledText>
    <Loader />
  </Wrapper>
);