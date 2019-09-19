import React, { Component } from "react";
import { connect } from "react-redux";
import Select from "react-select";

import Resume_9_18_19 from "../content/documents/Resume_9_18_19.pdf";
import Resume_9_11_19 from "../content/documents/Resume_9_11_19.pdf";
import Resume_8_2_19 from "../content/documents/Resume_8_2_19.pdf";
import { changeResume } from "./../redux/actions/resumeActions";

const options = [
  { value: Resume_9_18_19, label: "Resume_9_19_19" },
  { value: Resume_9_11_19, label: "Resume_9_11_19" },
  { value: Resume_8_2_19, label: "Resume_8_2_19" }
];

class ResumeSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: { value: Resume_9_11_19, label: "Resume_9_11_19" }
    };
  }

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    this.props.changeResume(selectedOption.value);
  };

  render() {
    const { selectedOption } = this.state;
    return (
      <div style={{ width: "500px" }}>
        <Select
          value={selectedOption}
          onChange={this.handleChange}
          options={options}
        />
      </div>
    );
  }
}

export default connect(
  null,
  { changeResume }
)(ResumeSelect);
