import React, { useEffect, useRef, useState } from 'react';

import WelcomeComponent from '../WelcomeComponent';
import NavBarComponent from '../NavBarComponent';
import AboutComponent from '../AboutComponent';
import WorkComponent from '../WorkComponent';
import ProjectComponent from '../ProjectComponent';

import './styles.css';

/**
 * Main component
 *
 * @example
 * return(
 *   <MainComponent />
 * )
 */

const MainComponent = () => {
  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);
  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= 0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  return (
    <>
      <WelcomeComponent />

      <div className={`sticky-wrapper${isSticky ? ' sticky' : ''}`} ref={ref}>
        <NavBarComponent />
      </div>

      <AboutComponent />

      <WorkComponent />

      <ProjectComponent />
    </>
  );
};

export default MainComponent;
