/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Typography, Box, useMediaQuery } from '@material-ui/core';
import { Link } from 'react-scroll';

import HomeIcon from '@material-ui/icons/Home';

const NavBarComponent = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  const linksVariants = {
    variant: isSmallScreen ? 'subtitle1' : 'h6',
  };
  const marginChange = isSmallScreen ? 4 : 1;
  const marginYChange = isSmallScreen ? 0 : 1;

  const navigations = [
    { to: 'about', text: 'ABOUT' },
    { to: 'work', text: 'WORK' },
    { to: 'projects', text: 'PROJECTS' },
  ];

  return (
    <div
      className="navbar-main" // Needed for Navbar to turn sticky
      style={{
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
        minHeight: '2rem',
        backgroundColor: '#FAFAFD',
        zIndex: 1,
        padding: '0.5rem',
        boxShadow: '0 1rem 1rem 0 #9B9B9B',
      }}
    >
      <button type="button">
        <Box mx={marginChange} my={marginYChange}>
          <Link
            offset={0}
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
      {navigations.map((nav) => (
        <button type="button">
          <Box mx={marginChange} my={marginYChange}>
            <Link offset={-60} activeClass="active" to={nav.to} spy smooth duration={500}>
              <Typography {...linksVariants} style={{ color: '#759EFF' }}>
                <Box fontWeight={300}>{nav.text}</Box>
              </Typography>
            </Link>
          </Box>
        </button>
      ))}
    </div>
  );
};

export default NavBarComponent;
