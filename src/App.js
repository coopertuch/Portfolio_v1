import React from "react";
import "./App.css";
import { Route, Link, Switch, Router } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Music from "./components/Music";

export default function App() {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <nav>
            <Link className="link" to="/Portfolio">
              <h1 className="link"> Home </h1>
            </Link>
            <Link className="link" to="/Projects">
              <h1 className="link"> Projects </h1>
            </Link>
            <Link className="link" to="/Blog">
              <h1 className="link"> Blog </h1>
            </Link>
            <Link className="link" to="/Music">
              <h1 className="link"> Music </h1>
            </Link>
          </nav>
        </header>

        <main>
          <Switch>
            <Route path="/Portfolio">
              <Home />
            </Route>
            <Route path="/Projects">
              <Projects />
            </Route>
            <Route path="/Blog">
              <Blog />
            </Route>
            <Route path="/Music">
              <Music />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}
