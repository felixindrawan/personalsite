/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Typography, Grid, Box, useMediaQuery } from '@material-ui/core';

import './styles.css';

/**
 * Component to store about information
 *
 * @example
 * return(
 *   <InfoComponent />
 * )
 */

const InfoComponent = () => {
  const isMediumScreen = useMediaQuery('(max-width:960px)');
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  const textProps = {
    variant: isMediumScreen || isSmallScreen ? 'h5' : 'h4',
    align: isMediumScreen || isSmallScreen ? 'center' : 'left',
  };
  const marginProps = {
    justify: isMediumScreen || isSmallScreen ? 'center' : 'left',
    boxShadow: '0.175rem 0.175rem 1rem 0 #9B9B9B',
    borderRadius: '0.7rem',
  };

  return (
    <Box flexDirection="column" className="infoa-box" minHeight="0" {...marginProps}>
      <Grid className="info-grid">
        <Typography {...textProps}>
          <Box fontWeight="300">
            Loves&nbsp;
            {isSmallScreen && <br />}
            <span className="text-emphasis">Badminton & Pickleball</span>
            ,
          </Box>
        </Typography>
        <Typography {...textProps}>
          <Box fontWeight="300">
            reached&nbsp;
            {isSmallScreen && <br />}
            <span className="text-emphasis">Top 15 in Canada 19+</span>
          </Box>
        </Typography>
        <Typography {...textProps}>
          <Box fontWeight="300">
            Also love&nbsp;
            {isSmallScreen && <br />}
            <span className="text-emphasis">Movies and FPS games</span>
          </Box>
        </Typography>
      </Grid>
    </Box>
  );
};

export default InfoComponent;