import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import PersonInfo from './../components/PersonInfo';

const PersonInfoWithRouter = withRouter(PersonInfo);

class PersonView extends Component {
  render() {
    const name = this.props.match.params.name;
    return (
      <div>
        <h1>Name: {name}</h1>
        <PersonInfoWithRouter />
      </div>
    );
  }
}

export default PersonView;
