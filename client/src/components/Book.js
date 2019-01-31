import React, { Component } from 'react'

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
      <div className="book">
        <div className="book-img">
          <img src={image_url} alt={title} />
        </div>
        <div className="book-info">
          <h3 className="book-title">{title}</h3>
          <h4>{author}</h4>
          <h4>Description:</h4>
          <p>{description}</p>
        </div>
      </div>
    )
  }
}

export default Book;
