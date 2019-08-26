import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core/";
import Links from "../components/Links";

const Home = () => (
  <Fragment>
    <header className="App-header">
      <Link to="/AboutMe" style={{ color: "black", textDecoration: "none" }}>
        <Typography variant="h1">Alvin Gao</Typography>
      </Link>
      <Links />
    </header>
  </Fragment>
);

export default Home;
