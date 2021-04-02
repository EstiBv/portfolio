import React from "react";
import { Route, Switch } from "react-router";
import Develop from "./subIndex.js/Develop";
import Design from "./subIndex.js/Design";
import Art from "./subIndex.js/Art";
import Footer from "./Footer";

const Categories = () => {
  return (
    <>
      <div>Hola projects</div>
      <Switch>
        <Route path="/develop" component={Develop} />
        <Route path="/design" component={Design} />
        <Route path="/art" component={Art} />
      </Switch>
      <Footer />
    </>
  );
};

export default Categories;
