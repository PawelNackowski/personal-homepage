import { Description, Header, Link, List, WrapperLink } from "./styled";
import { StyledTile } from "./styled";
import { useQuery } from "@tanstack/react-query";
import { fetchPortfolio } from "../fetchPortfolio";
import { Loading } from "../Loading";
import { Error } from "../Error";
import { useEffect, useState } from "react";

const HIDDEN_REPOS = [
  "PawelNackowski"
];

export const Tile = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { data, isError } = useQuery(["repos"], fetchPortfolio);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Error />;
  }
  return (
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
  );
};