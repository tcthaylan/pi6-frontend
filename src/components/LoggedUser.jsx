import React from 'react';
import { inject } from 'mobx-react';
import './LoggedUser.css';
import localStorage from '../utils/localStorage';

class LoggedUser extends React.Component {
  constructor(props) {
    super(props)

    this.logout = this.logout.bind(this)
  }

  logout() {
    const { history } = this.props;
    console.log(history)
    localStorage.remove('token')
    history.push('./')
    console.log('oi')
  }

  render() {
    const { email } = this.props;
    console.log(email)
    return(
      <div className="loggedUser">
        <img src="./default-user.png" />
        <p>{email}</p>
        <span 
          onClick={this.logout}
          className="btn-logout"
        >Sair</span>
      </div>
    )
  }
}

export default inject('Auth')(LoggedUser);
