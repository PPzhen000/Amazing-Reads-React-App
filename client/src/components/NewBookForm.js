import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions/bookActions';
import './NewBookForm.css';

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
      <div>
        <h1>Add a Book</h1>
          <div className="book-form-container">
            <form className='book-form' onSubmit={this.onSubmit}>
              <div className='book-form-line'>
                <label>Title:</label>
                <input
                  type='text'
                  name='title'
                  onChange={this.onChange}
                  value={this.state.title}
                />
              </div>

              <div className='book-form-line'>
                <label>Author:</label>
                <input
                  type='text'
                  name='author'
                  onChange={this.onChange}
                  value={this.state.author}
                />
              </div>

              <div className='book-form-line'>
                <label>Description:</label>
                <textarea
                  type='text'
                  name='description'
                  onChange={this.onChange}
                  value={this.state.description}
                />
              </div>

              <div className='book-form-line'>
                <label>Image Url:</label>
                <input
                  type='text'
                  name='image_url'
                  onChange={this.onChange}
                  value={this.state.image_url}
                 />
              </div>

              <button className='button' type="submit">Add Book</button>
            </form>
          </div>
      </div>

    );
  }
}

export default connect(null, { createBook })(NewBookForm);
