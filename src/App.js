import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import HomeView from "./screens/HomeView";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" render={HomeView} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
