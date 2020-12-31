import React, { Component } from 'react'
import {BrowserRouter as Router,Link} from 'react-router-dom';
export default class Header extends Component {
  render() {
    return (
      <div>
        <header>
        <Router>
        <ul className="first-nav">
          <li>
            <Link to="/">Cars</Link>
            </li>
          <li>
            <Link to="/services">Services</Link>
            </li>
          <li>
            <Link to="/owners">Owners</Link>
            </li>
        </ul>
        </Router>
        <h1>Mob-il</h1>
        <Router>
        <ul className="second-nav">
          <li>
            <Link to="/about">About</Link>
            </li>
          <li>
            <Link to="/lifestyle">Lifestyle</Link>
            </li>
          <li>
            <Link to="/dealers">Dealers</Link>
            </li>
        </ul>
        </Router>

      </header>
      <hr/>
      </div>
    
    )
  }
}
