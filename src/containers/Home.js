import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core/";
import Links from "../components/Links";

const Home = () => (
  <header className="App-header">
    <Link to="/AboutMe" style={{ color: "black", textDecoration: "none" }}>
      <div className="typewriter1">
        <Typography variant="h1">ALVIN</Typography>
      </div>
      <div className="typewriter2">
        <Typography variant="h1">GAO</Typography>
      </div>
    </Link>
    <Links />
  </header>
);

export default Home;
