import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBooks } from '../actions/bookActions';
import Books from '../components/Books';

class BooksContainer extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     books: []
  //   }
  // }

  componentDidMount() {
    this.props.fetchBooks();
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.newBook) {
  //     this.props.books.unshift(nextProps.newBook);
  //   }
  // }

  render() {
    return (
      <div className="books-container">
        <Books books={this.props.books}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  books: state.books.bookItems,
  newBook: state.books.bookItem
})

export default connect(mapStateToProps, { fetchBooks })(BooksContainer);
