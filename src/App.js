import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom";
// import { Route, Link, Switch, Redirect } from "react-router-dom";
// import Home from "./components/Home";
// import Projects from "./components/Projects";
// import Blog from "./components/Blog";
// import Music from "./components/Music";

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="header">
          <nav>
            <Link className="link" to="/Portfolio">
              <h1 className="link">
                {" "}
                Cooper Tuch // Junior Frontend Developer{" "}
              </h1>
            </Link>
            {/* <Link className="link" to="/Projects">
              <h1 className="link"> Projects </h1>
            </Link>
            <Link className="link" to="/Blog">
              <h1 className="link"> Blog </h1>
            </Link>
            <Link className="link" to="/Music">
              <h1 className="link"> Music </h1>
            </Link> */}
          </nav>
        </header>

        {/* <main>
          <Switch>
            <Route path="/Portfolio" exact component={Home} />
            <Route path="/Projects" exact component={Projects} />
            <Route path="/Blog" exact component={Blog} />
            <Route path="/Music" exact component={Music} />
            <Redirect from="*" to="/Portfolio" />
          </Switch>
        </main> */}
      </div>
    );
  }
}

export default App;
