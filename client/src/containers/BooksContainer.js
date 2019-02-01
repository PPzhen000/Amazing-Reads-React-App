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

  render() {
    return (
      <div className="books-container">
        <Books books={this.props.books}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  books: state.books.bookItems
})

export default connect(mapStateToProps, { fetchBooks })(BooksContainer);
