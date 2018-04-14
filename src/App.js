import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Navbar               from './components/navbar'
import Checkbook            from './pages/checkbook'
import About                from './pages/about'
import Help                 from './pages/help'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path='/' component={Checkbook} />
          <Route path='/home'   component={Checkbook} />
          <Route path='/about'  component={About} />
          <Route path='/help'   component={Help}  />
        </div>
      </Router>
    );
  }
}

export default App;
