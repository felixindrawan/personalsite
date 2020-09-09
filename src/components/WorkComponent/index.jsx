/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import FlipComponent from './FlipComponent';
import pinnacleLogo from '../../assets/pinnacle-logo-shadow.png';
import logicsLogo from '../../assets/logics-academy-shadow.png';

import './styles.css';

/**
 * Component listing all my work experience
 *
 * @example
 * return(
 *   <WorkComponent />
 * )
 */

const WorkComponent = () => {
  const workData = [
    {
      key: 0,
      logo: pinnacleLogo,
      name: 'Pinnacle Investment',
      location: 'Jakarta, Indonesia',
      title: 'Web Developer',
      desc: 'Feature design & Unit/E2E testing',
      duration: 'Summer 2020',
      info: 'React, Redux, PHP, Jest & Enzyme, Cypress',
    },
    {
      key: 1,
      logo: logicsLogo,
      name: 'Logics Academy',
      location: 'Toronto, Canada',
      title: 'Video Editor',
      desc: 'Design & Video Editing',
      duration: 'Summer 2018',
      info: 'Adobe Photoshop, Illustrator, Premiere',
    },
  ];

  return (
    <Grid className="work-page" container spacing={0} alignItems="center" justify="center">
      <Grid container>
        <Grid item md={12} xs={12}>
          <Typography className="text-title" align="center" variant="h4">
            Work Experience
          </Typography>
        </Grid>
        <Grid
          container
          direction="column"
          item
          md={12}
          xs={12}
          alignItems="center"
          justify="center"
        >
          {workData.map((work) => (
            <FlipComponent key={work.key} work={work} />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default WorkComponent;
