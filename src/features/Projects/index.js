import { SkillsContainer, StyledLink, StyledTile, Wrapper } from "./styled";
import { Loading } from "./Loading";
import { Error } from "./Error";
import useRepos from "./useReps";

export const ProjectSection = () => {
  const { repos, isLoading, error } = useRepos();
  return (

    <Wrapper>
      Portfolio <br />
      My recent projects
      {isLoading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <SkillsContainer>
          {repos.map((repo) => (
            <StyledTile key={repo.id}>
              <div>{repo.name}</div>
              <div>{repo.description}</div>
              <div>
                Demo:
                <StyledLink href={repo.homepage} target="_blank">
                  {repo.homepage}
                </StyledLink>
              </div>
              <div>
                Code:
                <div href={repo.html_url} target="_blank">
                  {repo.html_url}
                </div>
              </div>
            </StyledTile>
          ))}
        </SkillsContainer>
      )}
    </Wrapper>
  );
};