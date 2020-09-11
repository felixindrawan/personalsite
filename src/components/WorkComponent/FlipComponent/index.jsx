/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactCardFlip from 'react-card-flip';

import CompanyComponent from '../CompanyComponent';
import CompanyInfoComponent from '../CompanyInfoComponent';

/**
 * Component listing all my work experience
 *
 * @example
 * return(
 *   <FlipComponent />
 * )
 */

const FlipComponent = ({ work }) => {
  const [isFlipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <CompanyComponent
        onClick={handleClick}
        companyLogo={work.logo}
        companyName={work.name}
        companyLocation={work.location}
        positionTitle={work.title}
        duration={work.duration}
      />

      <CompanyInfoComponent
        onClick={handleClick}
        companyLogo={work.logo}
        companyName={work.name}
        positionTitle={work.title}
        positionDesc={work.desc}
        positionInfo={work.info}
      />
    </ReactCardFlip>
  );
};

FlipComponent.propTypes = {
  work: PropTypes.shape({
    logo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
  }).isRequired,
};

export default FlipComponent;
