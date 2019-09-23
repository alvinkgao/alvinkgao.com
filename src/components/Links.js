import React from "react";
import { githubIcon, gmailIcon, linkedinIcon } from "../content/images";

const Links = () => (
  <div className="Links">
    <a
      href="mailto:alvinkgao@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={gmailIcon} alt="gmail-link" height="30px" width="30px" />
    </a>
    <a
      href="https://github.com/alvinkgao"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={githubIcon} alt="github-link" height="30px" width="30px" />
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
