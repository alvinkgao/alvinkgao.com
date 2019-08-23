import React from "react";

import { Typography } from "@material-ui/core/";

const Projects = () => (
  <div className="App">
    <div className="split left">
      <header className="App-header">
        <Typography variant="h1">Projects Under Construction</Typography>
        <Typography variant="h4">Choose one of the projects below</Typography>
      </header>
    </div>
    <div className="split right">
      {/* <header className="App-header"> */}
      <Typography variant="h4">
        Project Description of the Project selected
      </Typography>
      {/* </header> */}
    </div>
  </div>
);

export default Projects;
