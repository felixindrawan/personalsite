/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, Box, Link, useMediaQuery } from '@material-ui/core';
import GithubIcon from '@material-ui/icons/GitHub';
import LinkRoundedIcon from '@material-ui/icons/LinkRounded';

import './styles.css';

/**
 * Component to store project information
 *
 * @param {Object} props
 * @param {Function} props.onClick Flip function for this component
 * @param {String} props.projectLogo The logo of the project
 * @param {String} props.projectName The name of the project
 * @param {String} props.projectLink The link/site of the project
 * @param {String} props.projectDesc Brief description of project
 * @param {String} props.projectType What the project was made for
 * @param {String} props.projectTime When the project was made
 * @param {String} props.imgStyle Background if needed for android apps
 * @param {string} props.githubLink The github link for the project
 *
 * @example
 * return(
 *   <ProjectBackComponent
 *     onClick={() => {}}
 *     projectLogo=''
 *     projectName=''
 *     projectLink=''
 *     projectDesc=''
 *     imgStyle=''
 *     githubLink='',
 *   />
 * )
 */

const ProjectBackComponent = ({
  onClick,
  projectLogo,
  projectName,
  projectLink,
  projectDesc,
  imgStyle,
  githubLink,
}) => {
  const isMediumScreen = useMediaQuery('(max-width:960px)');
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  const textProps = {
    variant: isMediumScreen || isSmallScreen ? 'h5' : 'h4',
    align: isMediumScreen || isSmallScreen ? 'center' : 'left',
    justify: isSmallScreen ?? 'center',
  };
  const subtextProps = {
    variant: isMediumScreen || isSmallScreen ? 'subtitle1' : 'h6',
  };
  const boxProps = {
    p: isSmallScreen ? 0 : 2,
  };
  const minWidthPropsGrid = {
    maxWidth: isMediumScreen || isSmallScreen ? '' : '25rem',
  };
  const iconStyle = {
    marginLeft: '0.5rem',
  };
  const displayLinkIcon = {
    display: githubLink === projectLink ? 'none' : '',
  };
  const titleStyle = {
    margin: isSmallScreen ? '0.5rem 0.5rem 0 0.5rem' : '',
  };
  const widthBox = isSmallScreen ? '20rem' : '25rem';
  const descriptionWidth = isMediumScreen || isSmallScreen ? '18rem' : '20rem';

  return (
    <button type="button" onClick={onClick}>
      <Box className="project-f-box" m={2} width={widthBox} {...boxProps}>
        <Grid container className="grid-project-f" style={{ ...minWidthPropsGrid }}>
          <Grid
            item
            container
            xs={12}
            alignItems="center"
            justify="space-between"
            style={{ ...titleStyle }}
          >
            <Typography {...textProps}>
              <Box fontWeight={300}>{projectName}</Box>
            </Typography>
            <div className="links">
              <Link
                rel="noopener noreferrer"
                target="_blank"
                href={projectLink}
                style={{ ...displayLinkIcon }}
              >
                <Box color="#759EFF">
                  <LinkRoundedIcon fontSize="large" style={{ ...iconStyle }} />
                </Box>
              </Link>
              <Link rel="noopener noreferrer" target="_blank" href={githubLink}>
                <Box color="#759EFF">
                  <GithubIcon fontSize="large" style={{ ...iconStyle }} />
                </Box>
              </Link>
            </div>
          </Grid>
          <Grid item xs={12}>
            <img
              className="project-logo"
              src={projectLogo}
              alt={projectName}
              style={{ ...imgStyle }}
            />
          </Grid>
          <Grid item xs={12} container justify="center">
            <Typography className="text-emphasis" {...subtextProps}>
              <Box fontWeight={300} maxWidth={descriptionWidth}>
                {projectDesc}
              </Box>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </button>
  );
};

ProjectBackComponent.propTypes = {
  onClick: PropTypes.func.isRequired,
  projectLogo: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  projectLink: PropTypes.string.isRequired,
  projectDesc: PropTypes.string.isRequired,
  imgStyle: {
    backgroudnColor: PropTypes.string,
  },
  githubLink: PropTypes.string.isRequired,
};

ProjectBackComponent.defaultProps = {
  imgStyle: { backgroundColor: '' },
};

export default ProjectBackComponent;
