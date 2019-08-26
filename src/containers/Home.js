import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core/";
import Links from "../components/Links";

const Home = () => (
  <header className="App-header">
    <Link to="/AboutMe" style={{ color: "blue", textDecoration: "none" }}>
      <Typography variant="h1">Alvin Gao</Typography>
    </Link>
    <Links />
  </header>
);

export default Home;
