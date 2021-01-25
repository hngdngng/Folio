import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Projects from "./Projects";
import About from "./About";
import Navbar from "./components/Navbar";
import './App.css';

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Projects} />
            <Route exact path="/about" component={About} />
            <Route component={Projects} />
          </Switch>
        </div>
    </HashRouter>
  );
}

export default App;
