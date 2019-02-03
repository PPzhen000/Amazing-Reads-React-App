import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Book.css';

class Book extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired
  }
  render() {
    const { id, title, author, description, image_url, onDelete } = this.props;
    return (
      <div className="book-card">
        <button className="delete-button" onClick={() => onDelete(id)}>X</button>
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
