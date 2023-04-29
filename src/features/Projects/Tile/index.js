import { Descroption, Header, Link, List } from "./styled";
import { StyledTile } from "../styled";

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
            <Descroption>{description}</Descroption>
            {!!homepage && (
              <div>
                Demo:
                <Link href={homepage} target="_blank" rel="noreferrer"> {homepage}</Link>
              </div>
            )}
            <div>
              Code:
              <Link href={html_url} target="_blank" rel="noreferrer"> {html_url} </Link>
            </div>
          </StyledTile>
        )))}
    </List>
  );
};