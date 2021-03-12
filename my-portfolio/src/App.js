import React from "react";
import { Switch } from "react-router";
import "./App.css";
// components
import Index from "./components/Index";
import Landing from "./components/Landing";

function App() {
  return (
    <>
      <Switch>
        <Landing exact path="/estibalizBarato" />
        <Index path="/index" />
      </Switch>
    </>
  );
}

export default App;
