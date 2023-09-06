import './styles.css';

import { Grid, Typography } from '@material-ui/core';

import React from 'react';
import FlipComponent from './FlipComponent';
import pinnacleLogo from '../../assets/WorkAssets/pinnacle-logo-shadow.png';
import logicsLogo from '../../assets/WorkAssets/logics-academy-shadow.png';
import rbcLogo from '../../assets/WorkAssets/Royal-Bank-of-Canada-Logo.png';
import omersLogo from '../../assets/WorkAssets/OMERS-logo.png';
import certiKLogo from '../../assets/WorkAssets/certiK logo.jpg';

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
      logo: certiKLogo,
      name: 'CertiK',
      location: 'New York, US',
      title: 'Full-Stack Developer',
      desc: 'Developed features for an internal auditing tool',
      duration: 'June 2022 - May 2023',
      info: 'React, TypeScript, Next.js, AWS',
    },
    {
      key: 0,
      logo: omersLogo,
      name: 'OMERS',
      location: 'Toronto, Canada',
      title: 'Front-End Developer',
      desc: 'Feature/bug fixes + 5 investment sites released',
      duration: 'Sept 2021 - May 2022',
      info: 'React, TypeScript, Next.js, Contentful',
    },
    {
      key: 1,
      logo: rbcLogo,
      name: 'Royal Bank of Canada',
      location: 'Toronto, Canada',
      title: 'Android Developer',
      desc: 'POC on new Android technology & Crash/Defect fixes',
      duration: 'Winter 2021',
      info: 'Android Studio, Java, Play Console',
    },
    {
      key: 2,
      logo: pinnacleLogo,
      name: 'Pinnacle Investment',
      location: 'Jakarta, Indonesia',
      title: 'Web Developer',
      desc: 'Feature design & Unit/E2E testing',
      duration: 'Summer 2020',
      info: 'React, Redux, PHP, Jest, Cypress',
    },
    {
      key: 3,
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
    <Grid
      id="work"
      className="work-page"
      container
      spacing={0}
      alignItems="center"
      justify="center"
    >
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
