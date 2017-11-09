import React from 'react';
import {Router, Route} from 'react-router-dom';
import history from './history';
import Home from './Home';
import Forecast from './Forecast';
import ZipInput from './ZipInput';

const AppRouter = () => {
  return (
    <Router history={history}>
      <div>
        <ZipInput/>
        <Route exact path="/" component={Home}/>
        <Route path="/:location" component={Forecast}/>
      </div>
    </Router>
  );
};

export default AppRouter;
