import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import NoMatch from "./pages/NoMatch";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

export class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <NavBar />
          <Route exact path="/" component={Search} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/saved" component={Saved} />
          <Route exact path="/noMatch" component={NoMatch} />
      </div>
    </Router>
    )
  }
}

export default App;

