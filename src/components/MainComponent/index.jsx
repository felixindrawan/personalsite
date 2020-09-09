import React from 'react';

import WelcomeComponent from '../WelcomeComponent';
import AboutComponent from '../AboutComponent';
import WorkComponent from '../WorkComponent';
import ContactComponent from '../ContactComponent';

import './styles.css';

/**
 * Main component
 *
 * @example
 * return(
 *   <MainComponent />
 * )
 */

const MainComponent = () => (
  <>
    <div id="home">
      <WelcomeComponent />
    </div>
    <div id="about">
      <AboutComponent />
    </div>
    <div id="work">
      <WorkComponent />
    </div>
    <div id="contact">
      <ContactComponent />
    </div>
  </>
);

export default MainComponent;
