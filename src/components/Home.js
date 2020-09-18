import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

export default class Home extends Component {
  render() {
    return(
      <div className="welcome">
        <Header />
        <h1> Get your thoughts out </h1>
        <h2>One. Word. At. A. Time.</h2>
        <h2> Forget the <span id="strike-out">mitsakes</span> mistakes</h2>
        <Link to="/text-vanish/write">
          <button className="btn-warning">Start writing now</button>
        </Link>
      </div>
    );
  }
}
