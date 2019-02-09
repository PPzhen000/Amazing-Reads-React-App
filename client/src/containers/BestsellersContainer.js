import React, { Component } from 'react';
import { connect } from 'react-redux';import { Link } from 'react-router-dom';
import FictionBestsellers from './FictionBestsellers';
import NonfictionBestsellers from './NonfictionBestsellers';

class BestSellersContainer extends Component {

  render() {
    return (
      <div className="books-container">
        <h2>New York Times Best Sellers List</h2>
        <h3>Combined Print & E-Book best sellers</h3>
        <h3>Fiction | Nonfiction</h3>
        <FictionBestsellers />
        <NonfictionBestsellers/ >
      </div>
    )
  }
}

export default connect(null, null)(BestSellersContainer);
