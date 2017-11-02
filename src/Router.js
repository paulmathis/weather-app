import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Forecast from "./Forecast";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/:location" component={Forecast} />
      </div>
    </Router>
  );
};

export default AppRouter;
