import React, {Component} from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <header>
        <h2><a>Amazing Reads</a></h2>
        <nav>
          <li><a>Home</a></li>
          <li><a>Must Read</a></li>
          <li><a>Bestsellers</a></li>
          <li><a>New Book</a></li>
        </nav>
      </header>
    );
  }
}

export default Navbar;
