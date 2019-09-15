import React from 'react';
import './Header.css';

import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <div className="navbar">
          <h1>Logo</h1>
          <nav className="navlinks">
            <ul className="navlinks-list">
              <li>
                <Link to={{
                    pathname: '/home',
                  }}
                >Home</ Link>
              </li>
              <li>
                <Link to={{
                    pathname: '/ADMIN',
                  }}
                >Admin</ Link>
              </li>
            </ul>
          </nav>
        </div>
      </>
    ) 
  }
}

export default Header;