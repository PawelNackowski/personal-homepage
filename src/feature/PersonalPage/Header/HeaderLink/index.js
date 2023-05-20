import { Button, Wrapper } from "./styled";


export const HeaderLink = () => (
  <Wrapper>
    <Button href="%PUBLIC_URL%/PawelNackowskiCV.pdf" download>
      Download CV
    </Button>
    {/* <Button href="%PUBLIC_URL%/PawełNackowski-CertyfikatYouCode.pdf" download>
      Download Certificate
    </Button> */}
  </Wrapper>
);