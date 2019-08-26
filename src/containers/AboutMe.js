import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import { Typography } from "@material-ui/core/";
import Links from "../components/Links";

const AboutMe = () => (
  <Fragment>
    <div className="split left">
      <Typography variant="h1">About Me</Typography>
    </div>
    <div className="split right">
      <Typography variant="inherit">{`Hello. Welcome to my portfolio.
      I'm currently a rising 4th year at University of California - Irvine expecting to graduate in April of 2021.
      I'm also a software developer intern at Ardent Labs where I do mostly front-end development with React and GraphQL.
      I occassionally delve into a little bit of back-end with Node.js.`}</Typography>

      <br />

      <Link to="/Resume" style={{ color: "blue", textDecoration: "none" }}>
        <Typography variant="h5">Resume</Typography>
      </Link>
      <br />
      <Link to="/Projects" style={{ color: "blue ", textDecoration: "none" }}>
        <Typography variant="h5">Projects</Typography>
      </Link>
      <br />
      <Link to="/Blog" style={{ color: "blue ", textDecoration: "none" }}>
        <Typography variant="h5">Blog</Typography>
      </Link>
      <Links />
      <br />
      <Link to="/Hobbies" style={{ color: "blue", textDecoration: "none" }}>
        <Typography variant="h5">Hobbies</Typography>
      </Link>
    </div>
  </Fragment>
);

export default AboutMe;
