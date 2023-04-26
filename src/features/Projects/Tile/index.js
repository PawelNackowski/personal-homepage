import { Descroption, Header, Link, Wrapper } from "./styled"

export const Tile = ({ title, content, linkDemo, linkRepo }) => {
  return (
    <>
      <Wrapper>
        <Header>{title}</Header>
        <Descroption>{content}</Descroption>
        <Link>Demo: {linkDemo}</Link>
        <Link>Repo: {linkRepo}</Link>
      </Wrapper>
    </>
  )
}