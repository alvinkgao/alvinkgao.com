import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./containers/Home";
import Resume from "./containers/Resume";
import Projects from "./containers/Projects";
import ContactMe from "./containers/ContactMe";
import Blog from "./containers/Blog";
import Hobbies from "./containers/Hobbies";
import { AppBar } from "./components";

function App() {
  return (
    <Fragment>
      <AppBar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={Home} />
          <Route path="/Resume" render={Resume} />
          <Route path="/Projects" render={Projects} />
          <Route path="/ContactMe" render={ContactMe} />
          <Route path="/Blog" render={Blog} />
          <Route path="/Hobbies" render={Hobbies} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
