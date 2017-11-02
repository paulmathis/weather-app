import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Forecast from './Forecast';
import Input from './Input';

const AppRouter = () => {
  return (
    <Router>
      <div className="">
        <Route exact path="/" component={Home} />
        <Route path="/:location" component={Forecast} />
      </div>
    </Router>
  );
};

export default AppRouter;
