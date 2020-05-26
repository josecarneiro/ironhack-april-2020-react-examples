import React, { Component } from 'react';

class LikeButton extends Component {
  constructor() {
    super();
    this.state = {
      liked: false
    };
  }

  changeLikeStatus = () => {
    this.setState({
      liked: !this.state.liked
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.changeLikeStatus}>+</button>

        <span>{(this.state.liked && 'Liked!') || 'Not liked...'}</span>

        {this.state.liked && (
          <>
            <em>
              Thank <small>you</small> for liking!
            </em>
            <em>
              Thank <small>you</small> for liking!
            </em>
          </>
        )}
      </div>
    );
  }
}

export default LikeButton;
