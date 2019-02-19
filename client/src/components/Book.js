import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LikeButton from '../containers/LikeButton';
import './Book.css';
import { Link } from 'react-router-dom'

const Book = ( { id, title, author, description, image_url, onDelete } ) => (
  <div className="book-card">
    <button className="delete-button" onClick={() => onDelete(id)}>X</button>
    <Link to={`/books/${id}`}>
      <div className="book-img">
        <img src={image_url} alt={title} />
      </div>
    </Link>
    <div className="book-info">
      {<h2 className="book-title">{title}</h2>}
      <h5>{author}</h5>
    </div>
    <LikeButton />
  </div>
)

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image_url: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

// class Book extends Component {
//   static propTypes = {
//     id: PropTypes.number.isRequired,
//     title: PropTypes.string.isRequired,
//     author: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     image_url: PropTypes.string.isRequired,
//     onDelete: PropTypes.func.isRequired,
//   }
//   render() {
//     const { id, title, author, description, image_url, onDelete } = this.props;
//     return (
//       <div className="book-card">
//         <button className="delete-button" onClick={() => onDelete(id)}>X</button>
//         <Link to={`/books/${id}`}>
//           <div className="book-img">
//             <img src={image_url} alt={title} />
//           </div>
//         </Link>
//         <div className="book-info">
//           {<h2 className="book-title">{title}</h2>}
//           <h5>{author}</h5>
//         </div>
//         <LikeButton />
//       </div>
//     )
//   }
// }

export default Book;
