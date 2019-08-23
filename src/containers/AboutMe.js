import React from "react";

import { Typography } from "@material-ui/core/";
import Links from "../components/Links";

const AboutMe = () => (
  <div className="App">
    <div className="split left">
      <Typography variant="h1">About Me</Typography>
    </div>
    <div className="split right">
      <Typography variant="inherit">Hi There</Typography>
      <Links />
    </div>
  </div>
);

export default AboutMe;
