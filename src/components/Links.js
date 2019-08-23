import React from "react";
import githubIcon from "../content/images/github.svg";
import linkedinIcon from "../content/images/linkedin.svg";

const Links = () => (
  <div className="Links">
    <a
      href="https://github.com/alvinkgao"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={githubIcon}
        alt="github-link"
        className="Icons"
        height="30px"
        width="30px"
      />
    </a>
    <a
      href="https://www.linkedin.com/in/alvinkgao/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={linkedinIcon} alt="github-link" height="30px" width="30px" />
    </a>
  </div>
);

export default Links;
