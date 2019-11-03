import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const btnLoginStyle = {
  backgroundColor: '#F22248',
  color: '#fff',
  padding: '10px 20px',
  borderRadius: '4px',
  fontSize: '13px',
  fontWeight: 600,
  textTransform: 'uppercase',
  textDecoration: 'none',
}

const logoStyle = {
  color: '#F22248',
  margin:' 20px 0',
  fontSize: '24px',
  fontWeight: 'bold',
  textDecoration: 'none',
}

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="navbar">
        <Link 
          to={{
          pathname: '/'
          }}
          style={logoStyle}
        >Epou Bear</ Link>
        <nav className="navlinks">
          <ul className="navlinks-list">
            <li className="navlinks-list-item">
              <Link to={{
                  pathname: '/auth/login',
                }}
                style={btnLoginStyle}
              >Login</ Link>
            </li>
            <li className="navlinks-list-item">
              <Link to={{
                  pathname: '/auth/register',
                }}
                style={btnLoginStyle}
              >Registrar</ Link>
            </li>
          </ul>
        </nav>
      </div>
    ) 
  }
}

export default Header;