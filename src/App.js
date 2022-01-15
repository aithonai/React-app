import { Switch, Route } from "wouter"
import Nav from "./components/Nav"
import Home from "./pages/Home"

export default function App() {
  return (
    <>
      <Nav />
      <Switch>
        <Route path="/" component={Home} />
        <Route>
          <span>404 ERROR</span>
        </Route>
      </Switch>
    </>
  )
}
