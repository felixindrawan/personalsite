/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import FlipComponent from './FlipComponent';

import HelpMeFocusFront from '../../assets/ProjectAssets/HelpMeFocusFront.png';
import HelpMeFocusBack from '../../assets/ProjectAssets/HelpMeFocusBack.png';
import BookListFront from '../../assets/ProjectAssets/BookListFront.png';
import BookListBack from '../../assets/ProjectAssets/BookListBack.png';
import GradeCalcFront from '../../assets/ProjectAssets/GradeCalculatorFront.png';
import GradeCalcBack from '../../assets/ProjectAssets/GradeCalculatorBack.png';

import './styles.css';

/**
 * Component to showcase my projects
 *
 * @example
 * return(
 *   <ProjectComponent />
 * )
 */

const ProjectComponent = () => {
  const projectsData = [
    {
      key: 0,
      name: 'HelpMeFocus',
      imageFront: HelpMeFocusFront,
      imageBack: HelpMeFocusBack,
      link: 'https://github.com/felixindrawan/GarudaHacks',
      github: 'https://github.com/felixindrawan/GarudaHacks',
      desc: 'Tools to aid students focus studying',
      skill: 'React, JS',
      type: 'Garuda Hacks, 2020',
    },
    {
      key: 1,
      name: 'Book Dashboard',
      imageFront: BookListFront,
      imageBack: BookListBack,
      link: 'https://github.com/felixindrawan/Book-Dashboard',
      github: 'https://github.com/felixindrawan/Book-Dashboard',
      desc: 'A web app that displays and adds books through API',
      skill: 'React, Axios, Redux, JS',
      type: 'Personal, 2020',
    },
    {
      key: 2,
      name: 'Grade Calculator',
      imageFront: GradeCalcFront,
      imageBack: GradeCalcBack,
      link: 'https://github.com/felixindrawan/Android-Projects',
      github: 'https://github.com/felixindrawan/Android-Projects',
      desc: 'An Android app that calculates weight-based grades',
      skill: 'Android Studio, Java',
      type: 'Personal, 2019',
    },
  ];

  return (
    <Grid className="project-page" container spacing={0} alignItems="center" justify="center">
      <Grid container>
        <Grid item md={12} xs={12}>
          <Typography className="text-title" align="center" variant="h4">
            Projects
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
          {projectsData.map((project) => (
            <FlipComponent key={project.key} work={project} />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProjectComponent;
