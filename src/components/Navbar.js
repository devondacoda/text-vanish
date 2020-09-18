import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-nav" id="navbar"> 
        <ul>  
          <li className="link-nav"><Link to="/text-vanish/write">Write</Link></li>
          <li className="link-nav"><Link to="/text-vanish/about">About</Link></li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
