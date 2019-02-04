import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

class BookPage extends React.Component {
  render() {
    return (
      <div>
        <div className="book-img">
          <img src={image_url} alt={title} />
        </div>
        <h1>{this.props.book.title}</h1>
        <p>Author: {this.props.book.author}</p>
        <p>Description: {this.props.book.description}</p>
      </div>
    );
  }
};

CatPage.propTypes = {
  cat: PropTypes.object.isRequired,
};

function mapStateToProps(state, ownProps) {
  let book = {title: '', author: '', description: '', image_url: ''};
  const bookId = ownProps.params.id;
  if (state.books.length > 0) {
    book = Object.assign({}, state.books.find(book => book.id ==
      id)
  }
  return {book: book};
};

export default connect(mapStateToProps)(BookPage);
