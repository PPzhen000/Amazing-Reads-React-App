import React, { Component } from 'react';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {like: 0};

    this.handleLikeClick = this.handleLikeClick.bind(this);
  }

  handleLikeClick() {
    this.setState({like: this.state.like + 1})
  }

  render() {
    return (
      <div>
        <button className="vote" onClick={this.handleLikeClick}>{this.state.like > 0? `${this.state.like} 👍` : 'Like' }</button>
      </div>
    );
  }
}

export default LikeButton;
