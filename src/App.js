import React, { Component } from "react";
import {
  Route,
  Link,
  browserHistory,
  Router,
  IndexRoute
} from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Music from "./components/Music";

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="header">
          <nav>
            <Link className="link" to="/Portfolio">
              <h1 className="link"> Home </h1>
            </Link>
            <Link className="link" to="/projects">
              <h1 className="link"> Projects </h1>
            </Link>
            <Link className="link" to="/blog">
              <h1 className="link"> Blog </h1>
            </Link>
            <Link className="link" to="/music">
              <h1 className="link"> Music </h1>
            </Link>
          </nav>
        </header>

        <main>
          <Router history={browserHistory}>
            <Route path="/" component={App}>
              <IndexRoute component={Home} />
              <Route path="/projects" component={Projects} />
              <Route path="/blog" component={Blog} />
              <Route path="/music" component={Music} />
            </Route>
          </Router>
        </main>
      </div>
    );
  }
}

export default App;
