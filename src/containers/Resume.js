import React, { Fragment } from "react";
import resume from "../content/documents/Resume_9_11_19.pdf";

import { Typography } from "@material-ui/core/";
import ResumeSelect from "../components/ResumeSelect";

const Resume = () => (
  <Fragment>
    <div className="split left">
      <Typography variant="h1">Resume</Typography>
      <br />
      <Typography variant="h4">Select a resume</Typography>
      <br />
      <ResumeSelect />
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
