import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { inject } from 'mobx-react';
import LoggedUser from '../LoggedUser'

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

    this.state = {
      loggedUser: {}
    }
  }

  async componentDidMount() {
    const { Auth } = this.props;
    const loggedUser = await Auth.getLoggedUser();
    if (loggedUser.data) {
      this.setState({ loggedUser: loggedUser.data })
    } 
  }

  render() {
    const { loggedUser } = this.state;
    const { history } = this.props;
    return (
      <div className="navbar">
        <Link 
          to={{
          pathname: '/'
          }}
          style={logoStyle}
        >CamparePizza</ Link>
        <nav className="navlinks">
          {!loggedUser.email ? (
            <ul className="navlinks-list">
              <li className="navlinks-list-item">
                <Link to={{
                    pathname: '/auth/login',
                  }}
                  style={btnLoginStyle}
                >Login</ Link>
              </li>
              {/* <li className="navlinks-list-item">
                <Link to={{
                    pathname: '/auth/register',
                  }}
                  style={btnLoginStyle}
                >Registrar</ Link>
              </li> */}
            </ul>
          ) : (
            <LoggedUser email={loggedUser.email} history={history}/>
          )}
        </nav>
      </div>
    ) 
  }
}

export default inject('Auth')(Header);