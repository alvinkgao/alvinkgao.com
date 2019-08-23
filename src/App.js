import React, { Fragment } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./containers/Home";
import Resume from "./containers/Resume";
import Projects from "./containers/Projects";
import AboutMe from "./containers/AboutMe";
import Blog from "./containers/Blog";
import Hobbies from "./containers/Hobbies";
import { AppBar } from "./components";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const initialState = {
  selectedProj: null
};

const reducer = (state = initialState, action) => {
  return state;
};

// const mapStateToProps = state => {
//   return {
//     count: state.count
//   };
// };
const theme = createMuiTheme({});
const App = () => {
  const store = createStore(reducer);
  return (
    <Fragment>
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <BrowserRouter>
            <AppBar />
            <Switch>
              <Route exact path="/" render={Home} />
              <Route path="/Resume" render={Resume} />
              <Route path="/Projects" render={Projects} />
              <Route path="/AboutMe" render={AboutMe} />
              <Route path="/Blog" render={Blog} />
              <Route path="/Hobbies" render={Hobbies} />
            </Switch>
          </BrowserRouter>
        </MuiThemeProvider>
      </Provider>
    </Fragment>
  );
};

export default App;
