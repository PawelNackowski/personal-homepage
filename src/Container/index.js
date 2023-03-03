import { Wrapper, Header } from "./styled"

export const Container = ({ title, body }) => {
  return (
    <>
      <Wrapper>
        <Header>
          {title}
        </Header>
        {body}
      </Wrapper>
    </>
  )
}