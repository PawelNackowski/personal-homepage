import { socials } from "./socials";
import { IconLink, StyledSocials } from "./styled";

export const Socials = () => (
  <StyledSocials>
    {socials.map(({ name, url, Icon }) => (
      <IconLink
        key={name}
        href={url}
        title={name}
        target="_blank"
        rel="noreferrer"
      >
        <Icon />
      </IconLink>
    ))}
  </StyledSocials>
);