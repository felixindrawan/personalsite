/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core';

import './styles.css';

/**
 * Component for me to say Hello
 *
 * @example
 * return(
 *   <WelcomeComponent />
 * )
 */

const WelcomeComponent = () => (
  <Grid
    id="home"
    className="welcome-grid"
    container
    spacing={0}
    alignItems="center"
    justify="center"
  >
    <div className="text">
      <Typography className="text-inside" align="center" variant="h2">
        Hi, I'm&nbsp;
        <span className="text-emphasis">Felix</span>
      </Typography>
      <Typography className="text-under" align="center" variant="h5">
        <Box fontWeight="300">CS - Stats at UofT</Box>
      </Typography>
    </div>
  </Grid>
);

export default WelcomeComponent;
