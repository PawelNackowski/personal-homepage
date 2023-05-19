import { Button, Wrapper } from "./styled";


export const HeaderLink = () => (
  <Wrapper>
    <Button href="/PawelNackowskiCV.pdf" download>
      Download CV
    </Button>
    <Button href="/PawełNackowski-CertyfikatYouCode.pdf" download>
      Download Certificate
    </Button>
  </Wrapper>
);