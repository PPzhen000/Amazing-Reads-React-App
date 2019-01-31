import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class Books  extends Component {
  static propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  render() {
    const books = this.props.recipes.map((b,index) => (
      <Book key={index} {...b} />
    ));

    return (
      <div className="book-list">
        {books}
      </div>
    )
  }
}

export default Books;
