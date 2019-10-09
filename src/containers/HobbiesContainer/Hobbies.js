import React, { Fragment } from "react";

import HobbiesGridList from "./HobbiesGridList";

import { Box, Typography } from "@material-ui/core/";

const Hobbies = () => (
  <Fragment>
    <div className="split left">
      <Typography variant="h1">Hobbies</Typography>
      <HobbiesGridList />
    </div>
    <div className="split right text">
      <Typography variant="h5">
        <Box>
          In my spare time, I play competitive ultimate frisbee where I am a
          captain and coach of my college team "Nightlife".
        </Box>
        <br />
        <Box>
          I also play in the Club Division where I have played on the following
          teams:
        </Box>
        <br />
        <Box className="text">
          <strong>2019: </strong>Orange County Crows
          <br />
          <strong>2018: </strong>Long Beach Legacy (Practice)
        </Box>
        <br />I also love trying new foods and I am actively seeking out new
        restaraunts and cuisines to try out. If you have any suggestions please
        let me know!
      </Typography>
    </div>
  </Fragment>
);

export default Hobbies;
