import React from 'react';
import { Typography } from '@material-ui/core';
import ContactComponent from './ContactComponent';

/**
 * Component for me to say Hello
 *
 * @example
 * return(
 *   <WelcomeComponent />
 * )
 */

const WelcomeComponent = () => (
  <div
    id="home"
    style={{
      height: '100vh',
      backgroundColor: '#FAFAFD',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    }}
  >
    <Typography
      align="center"
      variant="h2"
      style={{ textShadow: '0.175rem 0.175rem 0.35rem #9B9B9B' }}
    >
      Hi, I'm <span style={{ color: '#759EFF' }}>Felix</span>
    </Typography>
    <ContactComponent />
  </div>
);

export default WelcomeComponent;
