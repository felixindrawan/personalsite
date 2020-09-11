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
      desc: 'Web app providing tools to aid students focus with studying',
      skill: 'React, JS',
      type: 'Garuda Hacks',
      time: '2020',
    },
    {
      key: 1,
      name: 'Book Dashboard',
      imageFront: BookListFront,
      imageBack: BookListBack,
      link: 'https://github.com/felixindrawan/Book-Dashboard',
      github: 'https://github.com/felixindrawan/Book-Dashboard',
      desc: 'A web app to add and displays books through an API',
      skill: 'React, Redux, Axios, JS',
      type: 'Personal',
      time: '2020',
    },
    {
      key: 2,
      name: 'Grade Calculator',
      imageFront: GradeCalcFront,
      imageBack: GradeCalcBack,
      link: 'https://github.com/felixindrawan/Android-Projects',
      github: 'https://github.com/felixindrawan/Android-Projects',
      desc: 'An Android app calculating weight-based grades and potential marks',
      skill: 'Android Studio, Java',
      type: 'Personal',
      time: '2019',
      bgColor: '#333333',
    },
  ];

  return (
    <Grid
      id="projects"
      className="project-page"
      container
      spacing={0}
      alignItems="center"
      justify="center"
    >
      <Grid container>
        <Grid item md={12} xs={12}>
          <Typography className="text-title" align="center" variant="h4">
            Projects
          </Typography>
        </Grid>
        <Grid container direction="row" item md={12} xs={12} alignItems="center" justify="center">
          {projectsData.map((project) => (
            <FlipComponent key={project.key} project={project} />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProjectComponent;
