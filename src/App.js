import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Projects from "./Projects";
import About from "./About";
import './App.css';


function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route component={About} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
