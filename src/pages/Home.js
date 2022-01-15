import styled from "styled-components"
import BannerWrapper from "../components/BannerWrapper"

const Wrapper = styled.div`
  margin: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export default function Home() {
  return (
    <Wrapper>
      <BannerWrapper />
    </Wrapper>
  )
}
