import React, { Fragment } from "react";

import { Box, Typography } from "@material-ui/core/";
import { aboutMePicture } from "../content/images";
import Links from "../components/Links";

const AboutMe = () => (
  <Fragment>
    <div className="split left">
      {/* <Typography variant="h1">About Me</Typography> */}
      <img src={aboutMePicture} alt="aboutMe" width="500" height="500" />
    </div>
    <div className="split right">
      <Typography variant="h5">
        <Box fontWeight="fontWeightBold">
          Hello! My name is Alvin Gao. I am an aspiring full-stack developer.
          Welcome to my portfolio.
        </Box>
        <br />
        <Box>
          I'm currently a computer science and engineering student at University
          of California - Irvine expecting to graduate in Decemeber of 2020.
          During the school year, I am working as a software engineer at Ardent
          Labs where I work on web applications with React and GraphQL. I
          occassionally delve into a little bit of back-end with Node.js.
        </Box>
      </Typography>

      <br />
      <Links />

      {/* <Link to="/Resume" style={{ color: "blue", textDecoration: "none" }}>
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
      </Link> */}
    </div>
  </Fragment>
);

export default AboutMe;
