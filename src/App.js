import React, { Fragment } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

import AppRouter from "./AppRouter";
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
const theme = createMuiTheme({
  typography: {
    fontFamily: "Raleway"
  }
});
const App = () => {
  const store = createStore(reducer);
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
