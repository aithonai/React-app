import React from "react"
import ReactDOM from "react-dom"
import styled from "styled-components"
import App from "./App"
import { colors } from "./components/Theme"
//import reportWebVitals from './reportWebVitals';

const Wrapper = styled.section`
  height: 100vh;
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  background-color: ${colors.background};
`

ReactDOM.render(
  <React.StrictMode>
    <Wrapper>
      <App />
    </Wrapper>
  </React.StrictMode>,
  document.getElementById("root")
)

//reportWebVitals();
