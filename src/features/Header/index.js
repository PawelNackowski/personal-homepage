import { Content } from "./Content"
import { Photo } from "./Photo"
import { Wrapper } from "./style"

export const Header = () => {
  return (
    <>
      <Wrapper>
        <Photo />
        <Content />
      </Wrapper>
    </>
  )
}