import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchBooks, deleteBook } from '../actions/bookActions';
import Books from '../components/Books';

class BooksContainer extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    return (
      <div className="books-container">
        <Books books={this.props.books} onDelete={this.props.deleteBook} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  books: state.books.bookItems,
  newBook: state.books.bookItem
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchBooks,
  deleteBook
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BooksContainer);
