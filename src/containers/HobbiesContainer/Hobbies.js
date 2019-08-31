import React, { Fragment } from "react";

import HobbiesGridList from "./HobbiesGridList";

import { Typography } from "@material-ui/core/";

const Hobbies = () => (
  <Fragment>
    <div className="split left">
      <Typography variant="h1">Hobbies</Typography>
      <HobbiesGridList />
    </div>
    <div className="split right">
      <Typography variant="h5">
        In my spare time, I play competitive ultimate frisbee. I also love
        trying new foods and I am actively seeking out new restaraunts and
        cuisines to try out. If you have any suggestions please let me know!
      </Typography>
    </div>
  </Fragment>
);

export default Hobbies;
