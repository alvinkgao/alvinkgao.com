import React, { Fragment } from "react";

import { Typography } from "@material-ui/core/";
import Links from "../components/Links";

const AboutMe = () => (
  <Fragment>
    <div className="split left">
      <Typography variant="h1">About Me</Typography>
    </div>
    <div className="split right">
      <Typography variant="inherit">Hi There</Typography>
      <Links />
    </div>
  </Fragment>
);

export default AboutMe;
