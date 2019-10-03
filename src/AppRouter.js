import React from "react";
import { Route, Switch } from "react-router-dom";

// import Home from "./containers/Home";
import Resume from "./containers/Resume";
import Projects from "./containers/Projects";
import AboutMe from "./containers/AboutMe";
import Blog from "./containers/Blog";
import Hobbies from "./containers/HobbiesContainer/Hobbies";

const AppRouter = props => (
  <Switch>
    {/* <Route exact path="/" render={() => <Home />} /> */}
    <Route exact path="/" render={() => <AboutMe />} />
    <Route path="/Resume" render={() => <Resume />} />
    <Route path="/Projects" render={() => <Projects />} />
    <Route path="/Blog" render={() => <Blog />} />
    <Route path="/Hobbies" render={() => <Hobbies />} />
  </Switch>
);

export default AppRouter;
