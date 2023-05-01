import { ReactComponent as GitHubIcon } from "./Github.svg";
import { ReactComponent as LinkedInIcon } from "./LinkedIn.svg";
import { ReactComponent as FacebookIcon } from "./Facebook.svg";
import { ReactComponent as InstagramIcon } from "./Instagram.svg";
import { facebook, github, instagram, linkedIn } from "../../namePlate";
import { styledIcon } from "./styled";

export const socials = [
  {
    name: "github",
    url: github,
    Icon: styledIcon(GitHubIcon)
  },
  {
    name: "linkedin",
    url: linkedIn,
    Icon: styledIcon(LinkedInIcon)
  },
  {
    name: "facebook",
    url: facebook,
    Icon: styledIcon(FacebookIcon)
  },
  {
    name: "instagram",
    url: instagram,
    Icon: styledIcon(InstagramIcon)
  }
];