import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchBooks, deleteBook } from '../actions/bookActions';
import Books from '../components/Books';

class BooksContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { sortedByAuthor: false };
  }

  sortByAuthor = () => {
    this.setState({sortedByAuthor: true} )
  }

  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
  
    return (
      <div className="books-container">
        <h1>Your Library</h1>
        <button onClick={this.sortByAuthor}>Sort by Author</button>
        <Books books={this.props.books}
               onDelete={this.props.deleteBook}
               sortedByAuthor={this.state.sortedByAuthor}/>
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
