import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="hero is-primary is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="columns">
            <div className="column is-one-third is-offset-one-third">
              <h1 className="title">Simple Weather</h1>
              <div className="control">
                <input
                  type="text"
                  className="input is-medium"
                  placeholder="Enter a city or zip"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
