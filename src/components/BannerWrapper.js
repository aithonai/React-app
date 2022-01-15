import styled from "styled-components"
import { BannerContainer } from "./Banner"
import { Button } from "./Button"
import Headphone from "../assets/headphone.png"

const BannerImage = styled.picture`
  padding-top: 6px;
  width: 320px;
  height: 320px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export default function BannerWrapper() {
  return (
    <BannerContainer>
      <header>
        <h1>
          Hight Fidelity Sound Devices for the Modern Home, Workplace, and
          Studio
        </h1>
        <Button>Subscribe</Button>
      </header>
      <BannerImage>
        <img src={Headphone} alt="Xbox Headphone" />
      </BannerImage>
      
    </BannerContainer>
  )
}
