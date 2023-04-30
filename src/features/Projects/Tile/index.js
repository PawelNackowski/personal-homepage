import { Description, Header, Link, List, WrapperLink } from "./styled";
import { StyledTile } from "./styled";

export const Tile = ({ portfolio }) => {
  const HIDDEN_REPOS = [
    "PawelNackowski"
  ];
  return (
    <List>
      {portfolio.map(({ id, name, description, homepage, html_url }) => (
        !!HIDDEN_REPOS.includes(name) ? null : (
          <StyledTile key={id}>
            <Header>{name}</Header>
            <Description>{description}</Description>
            {!!homepage && (
              <WrapperLink>
                Demo:
                <Link href={homepage} target="_blank" rel="noreferrer">Project Demo</Link>
              </WrapperLink>
            )}
            <WrapperLink>
              Code:
              <Link href={html_url} target="_blank" rel="noreferrer"> Link to code</Link>
            </WrapperLink>
          </StyledTile>
        )))}
    </List>
  );
};