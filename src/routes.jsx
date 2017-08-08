import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './shared_modules/header/header';

// include scss
import './shared_styles/base.scss';

// define routes
const Routes = (() =>
  <BrowserRouter>
    <div id="app-container">
      <Route path="/" component={() => <Header />} />
    </div>
  </BrowserRouter>
);

export default Routes;
