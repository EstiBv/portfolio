import React from "react";
import { Route, Switch } from "react-router";
import "./App.css";
// components
import Index from "./components/Index";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/index" component={Index} />
      </Switch>
    </>
  );
}

export default App;
