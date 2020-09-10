/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactCardFlip from 'react-card-flip';

/**
 * Component listing all my work experience
 *
 * @example
 * return(
 *   <FlipComponent />
 * )
 */

const FlipComponent = ({ data }) => {
  const [isFlipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!isFlipped);
  };

  return (
    // <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">

    // </ReactCardFlip>
    <> </>
  );
};

FlipComponent.propTypes = {

};

export default FlipComponent;
