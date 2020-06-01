import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import './App.css';

import HomeView from './views/HomeView';
import AboutView from './views/AboutView';
import PersonView from './views/PersonView';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        name: 'José Carneiro',
        location: 'Lisbon'
      }
    };
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/person/santi">Santi's Page</Link>
            <Link to="/person/aline">Aline's Page</Link>

            <span>Authenticated user: {this.state.user.name}</span>
          </nav>

          <Switch>
            {/* If you want to pass "props" to a view, you need to use the render attribute instead of component attribute */}
            {/* <Route path="/" exact component={HomeView} /> */}
            <Route
              path="/"
              exact
              render={props => <HomeView user={this.state.user} {...props} />}
            />

            <Route path="/about" exact component={AboutView} />

            <Route path="/person/:name" exact component={PersonView} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
