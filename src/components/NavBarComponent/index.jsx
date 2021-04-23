/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Typography, Grid, Box, useMediaQuery } from '@material-ui/core';
import { Link } from 'react-scroll';

import HomeIcon from '@material-ui/icons/Home';
import './styles.css';

const NavBarComponent = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  const linksVariants = {
    variant: isSmallScreen ? 'subtitle1' : 'h6',
  };
  const marginChange = isSmallScreen ? 4 : 1;
  const marginYChange = isSmallScreen ? 0 : 1;
  const mobileOffSetAbout = isSmallScreen ? -50 : 0;

  return (
    <Grid className="navbar-main" container alignItems="center" justify="center">
      <button type="button">
        <Box mx={marginChange} my={marginYChange}>
          <Link
            offset={0}
            className="text-emphasis"
            style={{ color: '#759EFF' }}
            activeClass="active"
            to="home"
            spy
            smooth
            duration={500}
          >
            <HomeIcon className="link-icon" />
          </Link>
        </Box>
      </button>
      <button type="button">
        <Box mx={marginChange} my={marginYChange}>
          <Link
            offset={mobileOffSetAbout}
            activeClass="active"
            to="about"
            spy
            smooth
            duration={500}
          >
            <Typography className="text-emphasis" {...linksVariants}>
              <Box fontWeight={300}>ABOUT</Box>
            </Typography>
          </Link>
        </Box>
      </button>
      <button type="button">
        <Box mx={marginChange} my={marginYChange}>
          <Link offset={-60} activeClass="active" to="work" spy smooth duration={500}>
            <Typography className="text-emphasis" {...linksVariants}>
              <Box fontWeight={300}>WORK</Box>
            </Typography>
          </Link>
        </Box>
      </button>
      <button type="button">
        <Box mx={marginChange} my={marginYChange}>
          <Link offset={-60} activeClass="active" to="projects" spy smooth duration={500}>
            <Typography className="text-emphasis" {...linksVariants}>
              <Box fontWeight={300}>PROJECTS</Box>
            </Typography>
          </Link>
        </Box>
      </button>
    </Grid>
  );
};

export default NavBarComponent;
