import React, { Component, Fragment } from "react";
import resume from "../content/documents/Resume_9_11_19.pdf";

import { Typography } from "@material-ui/core/";
import { Links, ResumeSelect } from "../components";
import { connect } from "react-redux";
import { getResume } from "../redux/actions/resumeActions";

class Resume extends Component {
  componentWillMount() {
    this.props.getResume();
  }

  render() {
    return (
      <Fragment>
        <div className="split left">
          <Typography variant="h1">Resume</Typography>
          <br />
          <Typography variant="h4">Select a resume</Typography>
          <br />
          <ResumeSelect />
          <Links />
        </div>
        <div className="split right">
          <iframe
            title="resume-viewer"
            src={this.props.resume}
            width="100%"
            height="100%"
          ></iframe>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  resume: state.resume.item
});

export default connect(
  mapStateToProps,
  { getResume }
)(Resume);
