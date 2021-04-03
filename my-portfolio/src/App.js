import React, { useState } from "react";
import { Route } from "react-router";
import "./App.scss";
// components
import Projects from "./components/Projects";
import Landing from "./components/Landing";
// import Screen from "./components/Screen";
import About from "./components/About";
import Develop from "./components/subIndex.js/Develop";
import Design from "./components/subIndex.js/Design";
import Art from "./components/subIndex.js/Art";

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
      <Route exact path="/">
        {/* <Screen /> */}
        <Landing
          screenLanding={screenLanding}
          handleScreenLanding={handleScreenLanding}
        />
      </Route>
      <Route path="/projects">
        <Projects />
      </Route>
      <Route path="/about">
        <About></About>
      </Route>

      <Route path="/project/develop">
        <Develop />
      </Route>
      <Route path="/project/design">
        <Design />
      </Route>
      <Route path="/project/art">
        <Art />
      </Route>
    </>
  );
}

export default App;
