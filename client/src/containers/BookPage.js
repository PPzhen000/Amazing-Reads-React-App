import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom'

import { fetchBook } from '../actions/bookActions';

class BookPage extends Component {

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchBook(id);
  }

  render() {
    let style = {
      padding: '10px',
    };

    return (
      <div style={style}>
        <div className="book-img">
          <img src={this.props.book.image_url} alt={this.props.book.title} />
        </div>
        <h1>{this.props.book.title}</h1>
        <h2>{this.props.book.author}</h2>
        <p>Description: {this.props.book.description}</p>
        <Link to='/'>Back</Link>
      </div>
    );
  }
};

BookPage.propTypes = {
  book: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  book: state.books.bookItem,
})

export default connect(mapStateToProps, { fetchBook })(BookPage);
