import React, { Fragment } from "react";
import resume from "../content/documents/8-2-19.pdf";

import { Typography } from "@material-ui/core/";

const Resume = () => (
  <Fragment>
    <div className="split left">
      <Typography variant="h1">Resume Under Construction</Typography>
      <br />
      <Typography variant="h4">Select a resume</Typography>
    </div>
    <div className="split right">
      <iframe
        title="resume-viewer"
        src={resume}
        width="100%"
        height="100%"
      ></iframe>
    </div>
  </Fragment>
);

export default Resume;
