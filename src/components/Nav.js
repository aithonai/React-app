import styled from "styled-components"
import { colors } from "./Theme"
import Brand from "./Brand"
import { NavLink} from "./NavLink"

const NavSection = styled.header`
  width: 100%;
  height: 3.5rem;
  background-color: ${colors.white};
  box-shadow: rgb(0 0 0 / 10%) 0px 1px 0px;
`
const Limiter = styled.div`
  --width: 1440px;
  --padding-borders: 1rem;

  width: calc(var(--width) - var(--padding-borders) * 2);
  max-width: var(--width);
  padding: 0 var(--padding-borders);
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default function Nav() {
  return (
    <NavSection>
      <Limiter>
        <Brand />
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </Limiter>
    </NavSection>
  )
}
