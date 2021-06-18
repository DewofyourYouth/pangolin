import "bootstrap/dist/css/bootstrap.min.css";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
