import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Express Groomer
          </Link>
          <Link className="nav-link" to="/register">
            Register
          </Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
