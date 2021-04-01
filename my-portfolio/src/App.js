import React, { useState } from "react";
import { Route, Switch } from "react-router";
import "./App.scss";
// components
import Categories from "./components/Categories";
import Landing from "./components/Landing";
import Screen from "./components/Screen";

function App() {
  const [screenLanding, setScreenLanding] = useState(false);

  const handleScreenLanding = () => {
    setScreenLanding(!false);
    console.log("recived");
    paintScreen();
  };

  const paintScreen = () => {
    console.log("pintame");
  };
  return (
    <>
      <Switch>
        <Route exact path="/">
          {/* <Screen /> */}
          <Landing
            screenLanding={screenLanding}
            handleScreenLanding={handleScreenLanding}
          />
        </Route>
        <Route path="/index" component={Categories} />
      </Switch>
    </>
  );
}

export default App;
