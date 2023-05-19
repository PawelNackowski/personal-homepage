import { Content } from "./Content";
import { HeaderLink } from "./HeaderLink";
import { Photo } from "./Photo";
import { Wrapper } from "./style";

export const Header = () => (
  <>
    <HeaderLink />
    <Wrapper>
      <Photo />
      <Content />
    </Wrapper>
  </>
);