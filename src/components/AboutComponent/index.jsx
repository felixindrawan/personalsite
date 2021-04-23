/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { Grid, Typography, useMediaQuery } from '@material-ui/core';
import ReactCardFlip from 'react-card-flip';

import InfoComponent from './InfoComponent';
import InfoComponentback from './InfoComponentBack';

import profileImg from '../../assets/bald.jpg';

import './styles.css';

/**
 * Component to briefly explain about myself
 *
 * @example
 * return(
 *   <AboutComponent />
 * )
 */

const AboutComponent = () => {
  const [isFlipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!isFlipped);
  };

  const isMediumScreen = useMediaQuery('(max-width:960px)');
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  const imageJustifyProps = {
    justify: isMediumScreen || isSmallScreen ? 'center' : 'flex-end',
  };
  const textJustifyProps = {
    justify: isMediumScreen || isSmallScreen ? 'center' : 'flex-start',
  };

  return (
    <Grid
      id="about"
      className="about-page"
      container
      spacing={0}
      alignItems="center"
      justify="center"
    >
      <Grid container>
        <Grid item md={12} xs={12}>
          <Typography className="text-title" align="center" variant="h4">
            About Me
          </Typography>
        </Grid>
        <Grid item md={5} xs={12} container alignItems="center" {...imageJustifyProps}>
          <img className="profile-img" src={profileImg} alt="Felix" />
        </Grid>
        <Grid item md={7} xs={12} container alignItems="center" {...textJustifyProps}>
          <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <button type="button" onClick={handleClick}>
              <Grid item {...textJustifyProps}>
                <InfoComponent />
              </Grid>
            </button>
            <button type="button" onClick={handleClick}>
              <Grid item {...textJustifyProps}>
                <InfoComponentback />
              </Grid>
            </button>
          </ReactCardFlip>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AboutComponent;
