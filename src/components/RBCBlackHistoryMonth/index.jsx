/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import ImageComponent from './ImageComponent';
import MLKImage from '../../assets/BlackHistoryMonthAssets/MLK_jr.jpg';

import './styles.css';

/**
 * Component for BlackHistoryMonth
 *
 * @example
 * return(
 *   <WelcomeComponent />
 * )
 */

const gridInsideProps = {
  width: '70rem',
};

const RBCBHM = () => (
  <Grid
    id="home"
    className="bhm-grid"
    container
    spacing={0}
    alignItems="center"
    justify="center"
    direction="column"
  >
    <Grid container alignItems="center" justify="space-between" style={gridInsideProps}>
      <Typography variant="h4">BLACK HISTORY MONTH 2021</Typography>
      <Typography variant="h5">#THE FUTURE IS NOW</Typography>
    </Grid>
    <Grid container alignItems="center" justify="center" style={gridInsideProps}>
      <ImageComponent image={MLKImage} imageName="test" />
      <ImageComponent image={MLKImage} imageName="test" />
      <ImageComponent image={MLKImage} imageName="test" />
      <ImageComponent image={MLKImage} imageName="test" />
      <ImageComponent image={MLKImage} imageName="test" />
    </Grid>
    <Grid container alignItems="center" justify="center" style={gridInsideProps}>
      <ImageComponent image={MLKImage} imageName="test" />
      <ImageComponent image={MLKImage} imageName="test" />
      <ImageComponent image={MLKImage} imageName="test" />
      <ImageComponent image={MLKImage} imageName="test" />
      <ImageComponent image={MLKImage} imageName="test" />
    </Grid>
  </Grid>
);

export default RBCBHM;
