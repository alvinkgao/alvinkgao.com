import React, { Fragment } from "react";
import { Typography } from "@material-ui/core/";

const StartAnimation = props => {
  return (
    <Fragment>
      <div className="App App-header">
        <div className="typewriter1">
          <Typography variant="h1">ALVIN</Typography>
        </div>
        <div className="typewriter2">
          <Typography variant="h1">GAO</Typography>
        </div>
      </div>
      <div className="start">{props.children}</div>
    </Fragment>
  );
};

export default StartAnimation;
