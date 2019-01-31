import React, { Component } from 'react';

class BookForm extends React.Component {
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
    this.setState({value: event.target.value});
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
              value={title}
              onChange={this.handleChange}/>
          </div>

          <div>
            <label htmlFor='book-author'>Author</label>
            <input
              id='book-author'
              type='text'
              value={author}
              onChange={this.handleChange}/>
          </div>

          <div>
            <label htmlFor='book-description'>Description</label>
            <textarea
              id='book-description'
              type='description'
              value={description}
              onChange={this.handleChange}/>
          </div>
          
          <div>
            <label htmlFor='book-img'>Image Url:</label>
            <input
              id='book-img'
              type='text'
              placeholder=''
              value={image_url}
              onChange={this.handleChange} />
          </div>

          <input type="submit" value="Submit" />

        </form>
      </div>
    );
  }
}
