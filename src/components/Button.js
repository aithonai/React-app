import styled from "styled-components"
import { colors } from "./Theme"
import { BannerContainer } from "./Banner"

export const Button = styled.button`
  background-color: ${colors.primary};
  color: ${colors.white};
  padding: 12px 16px;
  border: 1px solid transparent;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;

  ${BannerContainer} & {
    background-color: ${colors.black};
  }
`
