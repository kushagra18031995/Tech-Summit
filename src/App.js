import React from "react";
import "./App.css";
import Nav from "./component/nav";
import Home from "./component/home";
import About from "./component/about";
import Gallary from "./component/gallary";
import Guests from "./component/guests";
import Contact from "./component/contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            {/* <Route path="/">
              <Redirect to="/home" />
            </Route> */}
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/guests" component={Guests} />
            <Route path="/contact" component={Contact} />
            <Route path="/gallary" component={Gallary} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
