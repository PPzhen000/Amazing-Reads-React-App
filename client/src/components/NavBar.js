import React, {Component} from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
      <h2><a>Amazing Reads</a></h2>
      <nav>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/'>Your Library</Link></li>
        <li><Link to='/bestsellers'>Bestsellers</Link></li>
        <li><Link to='/new'>New Book</Link></li>
      </nav>
    </header>
  )
}
export default Navbar;
