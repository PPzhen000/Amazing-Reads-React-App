import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchFictionBestsellers } from '../actions/bookActions';

class FictionBestsellers extends Component {

  componentDidMount() {
    this.props.fetchFictionBestsellers();
  }

  render() {
    const fiction = this.props.books.map(book => (
      <div key={book.rank}>
        <div>
          <img src={book.book_image} alt={book.title} />
          <h2>{book.title}</h2> <h5>By {book.author}</h5>
          <a target="_blank" href={book.amazon_product_url}>Buy Book</a>
        </div>
      </div>
    ))
    return (
      <div className="books-container">
      <h3>Fiction | <Link to={`/bestsellers/nonfiction`}>Nonfiction</Link></h3>
        {fiction}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  books: state.books.BestsellerItems,
})

export default connect(mapStateToProps, { fetchFictionBestsellers })(FictionBestsellers);
