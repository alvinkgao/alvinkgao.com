import React, { Fragment } from "react";

import HobbiesGridList from "./HobbiesGridList";

import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography
} from "@material-ui/core/";

const clubTeams = ["Crows 2019", "Legacy (Practice) 2018"];

const Hobbies = () => (
  <Fragment>
    <div className="split left">
      <Typography variant="h1">Hobbies</Typography>
      <HobbiesGridList />
    </div>
    <div className="split right">
      <Typography variant="h5">
        In my spare time, I play competitive ultimate frisbee where I am a
        captain and coach of my college team "Nightlife".
      </Typography>
      <br />
      {/* <Typography variant="body1">I have played for these teams</Typography> */}
      <Typography variant="h5">
        I also play in the Club Division where I have played on the following
        teams:
      </Typography>
      <Grid container spacing={1}>
        <Grid item>
          <div>
            <List>
              {clubTeams.map(team => (
                <ListItem>
                  <ListItemText primary={team} />
                </ListItem>
              ))}
            </List>
          </div>
        </Grid>
      </Grid>
      <br />
      <Typography variant="h5">
        I also love trying new foods and I am actively seeking out new
        restaraunts and cuisines to try out. If you have any suggestions please
        let me know!
      </Typography>
    </div>
  </Fragment>
);

export default Hobbies;
