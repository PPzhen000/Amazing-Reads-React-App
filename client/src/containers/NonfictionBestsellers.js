import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchNonfictionBestsellers } from '../actions/bookActions';

class NonfictionBestsellers extends Component {

  componentDidMount() {
    this.props.fetchNonfictionBestsellers();
  }

  render() {
    const nonfiction = this.props.books.map(book => (
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
      <h3><Link to={`/bestsellers/fiction`}>Fiction</Link> | Nonfiction</h3>
        {nonfiction}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  books: state.books.BestsellerItems,
})

export default connect(mapStateToProps, { fetchNonfictionBestsellers })(NonfictionBestsellers);
