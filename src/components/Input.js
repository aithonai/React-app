import styled from "styled-components"
import { colors } from "./Theme"

export const Input = styled.input`
  width: 18rem;
  height: 24px;
  padding: 10px 8px;
  border-radius: 10px;
  background-color: ${colors.gray};
  margin: 1rem;
  border: 2px solid transparent;

  &:focus {
    outline: none;
    border: 2px solid ${colors.primary + "55"};
  }
`
