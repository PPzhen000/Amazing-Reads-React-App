import React, { Component } from 'react';

class NewBookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      description: '',
      image_url: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    // handle submit
  }

  render() {
    return (
      <div className="book-form-container">
        <form onSubmit={this.handleSubmit}>

          <div>
            <label htmlFor='book-title'>Title</label>
            <input
              id='book-title'
              type='text'
              name='title'
              onChange={this.handleChange}/>
          </div>

          <div>
            <label htmlFor='book-author'>Author</label>
            <input
              id='book-author'
              type='text'
              name='author'
              onChange={this.handleChange}/>
          </div>

          <div>
            <label htmlFor='book-description'>Description</label>
            <textarea
              id='book-description'
              type='text'
              name='description'
              onChange={this.handleChange}/>
          </div>

          <div>
            <label htmlFor='book-img'>Image Url:</label>
            <input
              id='book-img'
              type='text'
              name='image_url'
              placeholder='image url'
              onChange={this.handleChange} />
          </div>

          <input type="submit" onClick={this.handleSubmit}>SAVE</input>

        </form>
      </div>
    );
  }
}

export default NewBookForm;
