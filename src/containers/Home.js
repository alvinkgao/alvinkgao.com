import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core/";
import Links from "../components/Links";

const Home = () => (
  <header className="App-header">
    <Link to="/AboutMe" style={{ color: "black", textDecoration: "none" }}>
      <div className="firstname">
        <Typography variant="h1">A</Typography>
        <Typography variant="h1">L</Typography>
        <Typography variant="h1">V</Typography>
        <Typography variant="h1">I</Typography>
        <Typography variant="h1">N</Typography>
      </div>
      <div className="lastname">
        <Typography variant="h1">G</Typography>
        <Typography variant="h1">A</Typography>
        <Typography variant="h1">O</Typography>
      </div>
    </Link>
    <Links />
  </header>
);

export default Home;
