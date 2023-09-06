import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import MainComponent from './components/MainComponent';

import './index.css';
import { BirthdayNFT } from './components/BirthdayNFT';
import KLPNFT from './components/BirthdayNFT/KLPNFT';
import VICNFT from './components/BirthdayNFT/VICNFT';
import VRGNFT from './components/BirthdayNFT/VRGNFT';
import CHUNFT from './components/BirthdayNFT/CHUNFT';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route exact path="/">
        <MainComponent />
      </Route>
      <Route exact path="/BirthdayNFT">
        <BirthdayNFT />
      </Route>
      <Route path="/BirthdayNFT/KLPNFT">
        <KLPNFT />
      </Route>
      <Route path="/BirthdayNFT/VICNFT">
        <VICNFT />
      </Route>
      <Route path="/BirthdayNFT/VRGNFT">
        <VRGNFT />
      </Route>
      <Route path="/BirthdayNFT/CHUNFT">
        <CHUNFT />
      </Route>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
