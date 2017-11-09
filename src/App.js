import React, {Component} from 'react';
import {Container} from 'reactbulma'
import AppRouter from './Router';
import './css/App.css'

class App extends Component {
  render() {
    return (
      <Container className="app">
        {/* <div className="home hero is-primary is-fullheight">
          <div className="hero-body"> */}
        <AppRouter/> {/* </div>
        </div> */}
      </Container>
    );
  }
}

export default App;
