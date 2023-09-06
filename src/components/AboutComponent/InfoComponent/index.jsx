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
  const skills = [
    'React',
    'React Native',
    'TypeScript',
    'JavaScript',
    'HTML',
    'CSS',
    'Java',
    'AWS',
    'GCP',
    'SQL / NoSQL',
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Box
        flexDirection="column"
        className="infoa-box"
        minHeight="0"
        marginBottom={4}
        {...marginProps}
      >
        <Grid className="info-grid">
          <Typography {...textProps}>
            <Box fontWeight="300">
              I'm a graduate from {isSmallScreen && <br />}
              <span className="text-emphasis">University of Toronto</span>,
            </Box>
          </Typography>
          <Typography {...textProps}>
            <Box fontWeight="300">
              specializing in {isSmallScreen && <br />}
              <span className="text-emphasis">Computer Science</span>.
            </Box>
          </Typography>
        </Grid>
      </Box>
      <div>
        {skills.map((skill) => (
          <div
            style={{
              display: 'inline-block',
              boxShadow: '0.175rem 0.175rem 1rem 0 #9B9B9B',
              borderRadius: '0.7rem',
              padding: 10,
              margin: '0 0.5rem 1rem ',
            }}
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoComponent;
