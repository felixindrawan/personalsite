/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, Box, useMediaQuery } from '@material-ui/core';

import './styles.css';

/**
 * Component to store about information
 *
 * @param {Object} props
 * @param {Function} props.onClick Flip function for this component
 * @param {String} props.companyLogo The logo of the company
 * @param {String} props.companyName The name of the company
 * @param {String} props.positionInfo The responsibility of the position
 *
 * @example
 * return(
 *   <InfoComponent
 *     onClick={() => {}}
 *     companyLogo=''
 *     companyName=''
 *     positionInfo=''
 *   />
 * )
 */

const CompanyInfoComponent = ({ onClick, companyLogo, companyName, positionInfo }) => {
  const isMediumScreen = useMediaQuery('(max-width:960px)');
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  const textProps = {
    variant: isMediumScreen || isSmallScreen ? 'h5' : 'h4',
    align: isMediumScreen || isSmallScreen ? 'center' : 'left',
  };
  const subtextProps = {
    variant: isMediumScreen || isSmallScreen ? 'subtitle1' : 'h6',
    align: isMediumScreen || isSmallScreen ? 'center' : 'left',
  };
  const textAlign = {
    alignItems: isMediumScreen || isSmallScreen ? 'center' : 'left',
  };
  const boxProps = {
    p: isSmallScreen ? 0 : 2,
  };

  return (
    <Box className="info-box" my={2} {...boxProps}>
      <button type="button" onClick={onClick}>
        <Grid container alignItems="center" justify="center">
          <Grid container item md={4} xm={12} alignItems="center" justify="center">
            <img className="company-c-logo" src={companyLogo} alt={companyName} />
          </Grid>
          <Grid
            container
            item
            md={8}
            xm={12}
            direction="column"
            alignItems={textAlign}
            justify="center"
          >
            <Grid item>
              <Typography {...textProps}>
                <Box fontWeight="300">{companyName}</Box>
              </Typography>
            </Grid>
            <Grid item>
              <Typography className="text-under" {...subtextProps}>
                <Box fontWeight="300">Skills</Box>
              </Typography>
            </Grid>
            <Grid item>
              <Typography className="text-emphasis" {...subtextProps}>
                <Box fontWeight="300">{positionInfo}</Box>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </button>
    </Box>
  );
};

CompanyInfoComponent.propTypes = {
  onClick: PropTypes.func.isRequired,
  companyLogo: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  positionInfo: PropTypes.string.isRequired,
};

export default CompanyInfoComponent;
