import React, { Component } from 'react';

class HomeView extends Component {
  render() {
    return (
      <div>
        <h1>Home View</h1>
        <span>Location of authenticated user: {this.props.user.location} </span>
      </div>
    );
  }
}

export default HomeView;
