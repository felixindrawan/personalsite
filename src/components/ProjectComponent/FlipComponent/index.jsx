/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactCardFlip from 'react-card-flip';

import ProjectFrontComponent from '../ProjectFrontComponent';
import ProjectBackComponent from '../ProjectBackComponent';

/**
 * Component listing all my projects
 *
 * @example
 * return(
 *   <FlipComponent />
 * )
 */

const FlipComponent = ({ project }) => {
  const [isFlipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <ProjectFrontComponent
        onClick={handleClick}
        projectLogo={project.imageFront}
        projectName={project.name}
        projectLink={project.link}
        projectSkills={project.skill}
        projectType={project.type}
        projectTime={project.time}
        imgStyle={project.styles}
        githubLink={project.github}
      />

      <ProjectBackComponent
        onClick={handleClick}
        projectLogo={project.imageBack}
        projectName={project.name}
        projectLink={project.link}
        projectDesc={project.desc}
        projectType={project.type}
        projectTime={project.time}
        imgStyle={project.styles}
        githubLink={project.github}
      />
    </ReactCardFlip>
  );
};

FlipComponent.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageFront: PropTypes.string.isRequired,
    imageBack: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    projectSkillstype: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    skill: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    styles: PropTypes.shape({
      backgroundColor: PropTypes.string,
    }),
  }).isRequired,
};

export default FlipComponent;
