import React, { Component } from 'react';
import AppRouter from './Router';

class App extends Component {
  render() {
    return (
      <div>
        {/* <div className="home hero is-primary is-fullheight">
          <div className="hero-body"> */}
        <AppRouter />
        {/* </div>
        </div> */}
      </div>
    );
  }
}

export default App;
