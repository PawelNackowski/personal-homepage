import { Wrapper, Header, SubHeader, GitHubRepoIcon } from "./styled";
import { Tile } from "./Tile";

export const ProjectSection = () => {
  return (
    <Wrapper>
      <GitHubRepoIcon />
      <Header>Portfolio</Header>
      <SubHeader>My recent projects</SubHeader>
      <Tile />
    </Wrapper>
  );
};
