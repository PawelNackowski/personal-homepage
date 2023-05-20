import { Button, Wrapper } from "./styled";


export const HeaderLink = () => (
  <Wrapper>
    <Button href="/personal-homepage/PawelNackowskiCV.pdf" download>
      Download CV
    </Button>
    <Button href="/personal-homepage/PawełNackowski-CertyfikatYouCode.pdf" download>
      Download Certificate
    </Button>
  </Wrapper>
);