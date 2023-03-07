import { Content } from "./Content"
import { Photo } from "./Photo"
import { Wrapper } from "./style"

export const Author = () => {
  return (
    <>
      <Wrapper>
        <Photo />
        <Content />
      </Wrapper>
    </>
  )
}