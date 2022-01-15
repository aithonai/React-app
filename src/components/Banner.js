import styled from "styled-components"
import { colors } from "./Theme"

export const BannerContainer = styled.header`
  padding: 0 2rem;
  width: calc(100% - 2rem * 2);
  height: 30rem;
  background-color: ${colors.primary + "65"};
  border-radius: 10px;
  display: flex;
  justify-content: space-between;

  h1 {
    all: none;
    font-size: 36px;
    font-weight: bold;
    max-width: 700px;
    line-height: 1.2;
    margin-top: 5rem;
  }
`