/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Grid, Typography, useMediaQuery } from '@material-ui/core';

import './styles.css';

/**
 * Component to briefly explain about myself
 *
 * @example
 * return(
 *   <ProjectComponent />
 * )
 */

const ProjectComponent = () => {
  const isMediumScreen = useMediaQuery('(max-width:960px)');
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  return (
    <Grid className="project-page" container spacing={0} alignItems="center" justify="center">
      <Grid container>
        <Grid item md={12} xs={12}>
          <Typography className="text-title" align="center" variant="h4">
            Projects
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProjectComponent;
