import React, { Fragment } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import AppRouter from "./AppRouter";

import { AppBar } from "./components";
import store from "./redux/configureStore";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: "Raleway"
  }
});
const App = () => {
  return (
    <Fragment>
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <BrowserRouter>
            <div className="App">
              <AppBar>
                <Route render={() => <AppRouter />}></Route>
              </AppBar>
            </div>
          </BrowserRouter>
        </MuiThemeProvider>
      </Provider>
    </Fragment>
  );
};

export default App;
