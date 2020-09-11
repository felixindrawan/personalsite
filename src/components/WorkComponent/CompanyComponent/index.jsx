/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, Box, useMediaQuery } from '@material-ui/core';

import './styles.css';

/**
 * Component to store company information
 *
 * @param {Object} props
 * @param {Function} props.onClick Flip function for this component
 * @param {String} props.companyLogo The logo of the company
 * @param {String} props.companyName The name of the company
 * @param {String} props.companyLocation The location of the company
 * @param {String} props.positionTitle The title of the position
 * @param {String} props.duration The duration of position
 *
 * @example
 * return(
 *   <CompanyComponent
 *     onClick={() => {}}
 *     companyLogo=''
 *     companyName=''
 *     companyLocation=''
 *     positionTitle=''
 *     duration=''
 *   />
 * )
 */

const CompanyComponent = ({
  onClick,
  companyLogo,
  companyName,
  companyLocation,
  positionTitle,
  duration,
}) => {
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
  const minWidthPropsGrid = {
    minWidth: isMediumScreen || isSmallScreen ? '0rem' : '40rem',
  };
  const marginLeftProps = {
    marginLeft: isMediumScreen || isSmallScreen ? '0rem' : '1rem',
  };

  return (
    <button type="button" onClick={onClick}>
      <Box className="info-box" my={2} {...boxProps}>
        <Grid container className="grid-work-info" style={{ ...minWidthPropsGrid }}>
          <Grid
            container
            className="company-logo-grid"
            item
            md={3}
            xm={12}
            alignItems="center"
            justify="center"
          >
            <img className="company-c-logo" src={companyLogo} alt={companyName} />
          </Grid>
          <Grid container item md={9} xm={12} direction="column" justify="center" {...textAlign}>
            <Grid item style={{ ...marginLeftProps }}>
              <Typography {...textProps}>
                <Box fontWeight="300">{companyName}</Box>
              </Typography>
            </Grid>
            <Grid item style={{ ...marginLeftProps }}>
              <Typography className="text-under" {...subtextProps}>
                <Box fontWeight="300">{positionTitle}</Box>
              </Typography>
            </Grid>
            <Grid item style={{ ...marginLeftProps }}>
              <Typography className="text-under" {...subtextProps}>
                <Box fontWeight="300">
                  {duration}
                  &nbsp;at&nbsp;
                  <span className="text-emphasis">{companyLocation}</span>
                </Box>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </button>
  );
};

CompanyComponent.propTypes = {
  onClick: PropTypes.func.isRequired,
  companyLogo: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  companyLocation: PropTypes.string.isRequired,
  positionTitle: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
};

export default CompanyComponent;
