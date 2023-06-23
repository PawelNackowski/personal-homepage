import { Description, Header, Link, List, WrapperLink } from "./styled";
import { StyledTile } from "./styled";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchPortfolio } from "../fetchPortfolio";
import { Loading } from "../Loading";
import { Error } from "../Error";
import { useEffect } from "react";

export const Tile = () => {
  const queryClient = useQueryClient();
  const { isLoading, data, isError } = useQuery(["repos"], fetchPortfolio, {
    enabled: false
  });

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      queryClient.prefetchQuery(["repos"], fetchPortfolio);
    }, 1000);
    return () =>
      clearTimeout(timeoutId);
  }, [queryClient]);

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Error />;
  }
  return (
    <List>
      {data.map(({ id, name, description, homepage, html_url }) => (
        !homepage ? null : (
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