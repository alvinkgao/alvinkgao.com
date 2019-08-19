import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import HomeView from "./containers/HomeView";
import { Toolbar, IconButton } from "@material-ui/core";
import { AppBar } from "./components";
import MenuIcon from "@material-ui/icons/Menu";

function App() {
  return (
    <Fragment>
      <AppBar />
      <BrowserRouter>
        <Switch>
          <Route path="/" render={HomeView} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
