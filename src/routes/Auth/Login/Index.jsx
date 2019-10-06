import React, { Component } from 'react'
import './Index.css'
import { Link } from 'react-router-dom';
import { inject } from 'mobx-react';
import localStorage from '../../../utils/localStorage';

class LoginScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: ''
    }

    this.signIn = this.signIn.bind(this);
  }

  async signIn() {
    const { Auth, history } = this.props;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const response = await Auth.signIn(email, password);
    if (response.status === 200) {
      localStorage.set('token', response.data.token)
      history.push('/admin')
    } else {
      this.setState({ error: 'Email e/ou senha incorreto(s)'})
    }
  }

  render() {
    const { error } = this.state;
    return(
      <div className="container-login">
        <div class="loginContent">
          <div class="loginContent-header">
            <img src="/images/auth/undraw_authentication_fsn5.svg"/>
            <h3>Login</h3>
          </div>
          <div className="loginContent-form">
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" name="email" class="form-control"/>
            </div>
            <a href="" class="loginContent-form-forgotPass">Esqueceu a senha?</a>
            <div class="form-group">
              <label for="password">Senha</label>
              <input type="password" id="password" name="password" class="form-control"/>
            </div>
            <input 
              type="submit" 
              value="Entrar" 
              class="btnLogin" 
              onClick={this.signIn} 
            />
          </div>
          <div class="loginContent-footer">
            Novo no EpouBear? 
            <Link
              to={{
                pathname: "/auth/register"
              }}
            >
            Crie uma conta
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default inject('Auth')(LoginScreen);