import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBestsellers } from '../actions/bookActions';
import Books from '../components/Books';

class BestSellersContainer extends Component {

  componentDidMount() {
    this.props.fetchBestsellers();
  }

  render() {
    const bestsellers = this.props.books.map(book => (
      <div key={book.rank}>
        <div>
          <img src={book.book_image} alt={book.title} />
          <h2>{book.title}</h2>
          <h5>By {book.author}</h5>
        </div>
      </div>
    ))
    return (
      <div className="books-container">
        <h2>New York Times Best Sellers List</h2>
        {bestsellers}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  books: state.books.BestsellerItems,
})

export default connect(mapStateToProps, { fetchBestsellers })(BestSellersContainer);
