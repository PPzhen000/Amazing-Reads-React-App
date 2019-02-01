import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Book.css';

class Book extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
  }
  render() {
    const {title, author, description, image_url} = this.props;
    return (
      <div className="book-card">
        <div className="book-img">
          <img src={image_url} alt={title} />
        </div>
        <div className="book-info">
          <h2 className="book-title">{title}</h2>
          <h5>{author}</h5>
          <p>Description:</p>
          <p>{description}</p>
        </div>
      </div>
    )
  }
}

export default Book;
