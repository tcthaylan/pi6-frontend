import { decorate, observable, action } from "mobx"
import axios from 'axios';
import { ip } from '../utils/config'

class Auth {
  loggedUser = {}

  async signIn(email, password) {
    try {
      const response = await axios.post(`${ip}/auth/authenticate`, {
        email,
        password
      });
      this.loggedUser = response.data.user;
      return response;
    } catch (error) {
      return error;
    }
  }
}

decorate(Auth, {
  loggedUser: observable,
  signIn: action,
})

export default new Auth;