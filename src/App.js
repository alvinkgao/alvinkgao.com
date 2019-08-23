import React, { Fragment } from "react";
import { createStore } from "redux";
import { connect, Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./containers/Home";
import Resume from "./containers/Resume";
import Projects from "./containers/Projects";
import ContactMe from "./containers/ContactMe";
import Blog from "./containers/Blog";
import Hobbies from "./containers/Hobbies";
import { AppBar } from "./components";

const initialState = {
  selectedProj: null
};

const reducer = (state = initialState, action) => {
  return state;
};

const mapStateToProps = state => {
  return {
    count: state.count
  };
};

const App = () => {
  const store = createStore(reducer);
  return (
    <Fragment>
      <Provider store={store}>
        <BrowserRouter>
          <AppBar />
          <Switch>
            <Route exact path="/" render={Home} />
            <Route path="/Resume" render={Resume} />
            <Route path="/Projects" render={Projects} />
            <Route path="/ContactMe" render={ContactMe} />
            <Route path="/Blog" render={Blog} />
            <Route path="/Hobbies" render={Hobbies} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </Fragment>
  );
};

export default App;
