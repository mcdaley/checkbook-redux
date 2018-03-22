import React, { Component } from 'react';

import Navbar               from './components/navbar'
import Checkbook            from './components/checkbook'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Checkbook />
      </div>
    );
  }
}

export default App;
