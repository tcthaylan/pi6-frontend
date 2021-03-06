import { decorate, observable, action, computed } from "mobx"
import axios from 'axios';
import { ip } from '../utils/config'
import localStorage from '../utils/localStorage'

class Auth {
  currentUserId = ""

  async signIn(email, password) {
    try {
      const response = await axios.post(`${ip}/auth/authenticate`, {
        email,
        password
      });
      this.currentUserId = response.data.user._id;
      return response;
    } catch (error) {
      return error;
    }
  }

  async getLoggedUser() {
    try {
      const token = localStorage.get('token');
      const response = await axios.get(`${ip}/users/me`,  {
        headers: {
          Authorization: "Bearer " + token
        }
      })
      return response
    } catch (error) {
      return error;
    }
  }

  async signUp(data) {
    try {
      const response = await axios.post(`${ip}/auth/register`, data, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      return response;
    } catch (error) {
      return error;
    }
  }
}

decorate(Auth, {
  currentUserId: observable,
  signIn: action,
  signUp: action,
  getLoggedUser: action
})

export default new Auth;