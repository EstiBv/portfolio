import React from "react";
import { Route, Switch } from "react-router";
import "./App.css";
// components
import Categories from "./components/Categories";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/index" component={Categories} />
      </Switch>
    </>
  );
}

export default App;
