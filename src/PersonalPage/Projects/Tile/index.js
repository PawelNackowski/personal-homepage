import { Description, Header, Link, List, WrapperLink } from "./styled";
import { StyledTile } from "./styled";
import { isError, useQuery } from "@tanstack/react-query";
import { fetchPortfolio } from "../fetchPortfolio";
import { Loading } from "../Loading";
import { Error } from "../Error";

export const Tile = ({ portfolio }) => {
  const { isLoading, data, error } = useQuery(
    ["repos"],
    fetchPortfolio
  );
  const HIDDEN_REPOS = [
    "PawelNackowski"
  ];
  if (isLoading) {
    return <Loading />;
  }
  if (isError(error)) {
    return <Error />;
  }
  return (
    <>
      <List>
        {data.map(({ id, name, description, homepage, html_url }) => (
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
    </>
  );
};