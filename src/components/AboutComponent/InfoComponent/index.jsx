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
            I'm a student at&nbsp;
            {isSmallScreen && <br />}
            <span className="text-emphasis">University of Toronto</span>
            ,
          </Box>
        </Typography>
        <Typography {...textProps}>
          <Box fontWeight="300">
            {!isSmallScreen && 'currently'}
            &nbsp;specializing in&nbsp;
            {isSmallScreen && <br />}
            <span className="text-emphasis">Computer Science</span>
          </Box>
        </Typography>
        <Typography {...textProps}>
          <Box fontWeight="300">
            and minoring in&nbsp;
            {isSmallScreen && <br />}
            <span className="text-emphasis">Statistics</span>
          </Box>
        </Typography>
      </Grid>
    </Box>
  );
};

export default InfoComponent;

// [{
//   "relation": ["delegate_permission/common.handle_all_urls"],
//   "target": {
//     "namespace": "android_app",
//     "package_name": "com.instantAppFelix.iademo",
//     "sha256_cert_fingerprints":
//     ["AA:76:3C:CF:70:25:7E:52:89:01:A0:3E:90:23:B7:6D:9B:BD:0F:D3:19:4C:40:59:C8:31:D1:5E:08:48:1A:34"]
//   }
// }]
