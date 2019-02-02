import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions/bookActions';

class NewBookForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      description: '',
      image_url: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  onSubmit(event) {
    event.preventDefault();
    // handle submit
    const book = {
      title: this.state.title,
      author: this.state.author,
      description: this.state.description,
      image_url: this.state.image_url,
    };

    this.props.createBook(book);
  }

  render() {
    return (
      <div className="book-form">
        <h1>Add a Book</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title: </label>
            <input
              type='text'
              name='title'
              onChange={this.handleChange}
              value={this.state.title}
            />
          </div>

          <div>
            <label>Author: </label>
            <input
              type='text'
              name='author'
              onChange={this.handleChange}
              value={this.state.author}
            />
          </div>

          <div>
            <label>Description: </label>
            <textarea
              type='text'
              name='description'
              onChange={this.handleChange}
              value={this.state.description}
            />
          </div>

          <div>
            <label>Image Url: </label>
            <input
              type='text'
              name='image_url'
              onChange={this.handleChange}
              value={this.state.image_url}
             />
          </div>

          <button type="submit">Add Book</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { createBook })(NewBookForm);
