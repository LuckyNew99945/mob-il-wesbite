import React, { Component } from 'react'
import {BrowserRouter as Router,Link} from 'react-router-dom';
export default class Navigation extends Component {
  render() {
    return (
      <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Cars</Link>
            </li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/owners">Owners</Link></li>
          <li>
            <Link to="/about">About</Link>
            </li>
          <li><Link to="/lifestyle">Lifestyle</Link></li>
          <li><Link to="/dealers">Dealers</Link></li>
        </ul>
      </div>
      </Router>
    )
  }
}

