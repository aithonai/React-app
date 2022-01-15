import styled from "styled-components"
import { colors, font } from "./Theme"
import { Link } from "wouter"

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #090b17;
  background-color: ${colors.gray};
  font-family: ${font.family};
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;

  nav & {
    margin-left: 6px;
    font-size: 13px;
    font-weight: 600;
  }
`