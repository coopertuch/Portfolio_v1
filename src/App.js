import React, { Component } from "react";
import "./App.css";
import { Route, Link, Switch, Redirect } from "react-router-dom";
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
            <Link className="link" to="/home">
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
            <Link className="link" to="/*">
              <h1 className="link"> Home </h1>
            </Link>
          </nav>
        </header>

        <main>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/projects" exact component={Projects} />
            <Route path="/blog" exact component={Blog} />
            <Route path="/music" exact component={Music} />
            <Route path="/*" render={() => <Redirect to="/home" />} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
