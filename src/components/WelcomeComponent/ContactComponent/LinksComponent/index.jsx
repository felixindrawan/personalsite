/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Box, Link } from '@material-ui/core';

import './styles.css';
/**
 * Component to contact me
 *
 * @param {Object} props
 * @param {String} props.link Hyperlink to the site
 * @param {String} props.category Category of the link
 * @param {Node} props.iconComponent Icon in component form
 * @param {Function} props.handleHover Function that handles link on hover
 *
 * @example
 * return(
 *   <ContactComponent
 *     link=''
 *     category=''
 *     iconComponent={null}
 *     handleHover={() => {}}
 *   />
 * )
 */

const LinksComponent = ({ link, category, iconComponent, handleHover }) => {
  return (
    <div className="grid-link" style={{ display: 'flex', alignItems: 'center', padding: '0 15px' }}>
      {iconComponent}
      <Link
        rel="noopener noreferrer"
        target="_blank"
        href={link}
        onMouseEnter={handleHover}
        style={{ textDecorationColor: 'black' }}
      >
        <Typography variant="h5">
          <Box fontWeight="300" color="black">
            {category}
          </Box>
        </Typography>
      </Link>
    </div>
  );
};

LinksComponent.propTypes = {
  link: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  iconComponent: PropTypes.node.isRequired,
  handleHover: PropTypes.func.isRequired,
};

export default LinksComponent;
