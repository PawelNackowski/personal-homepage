import { Loader, StyledText, Wrapper } from "./styled";

export const Loading = () => {
  return (
    <Wrapper>
      <StyledText>
        Please wait, projects are being loaded...
      </StyledText>
      <Loader />
    </Wrapper>
  );
};