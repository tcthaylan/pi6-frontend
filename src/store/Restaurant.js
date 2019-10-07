import { decorate, observable, action, computed } from "mobx"
import axios from 'axios';
import { ip } from '../utils/config'
import localStorage from '../utils/localStorage'

class Restaurant {
  async add(obj) {
    console.log(obj)
    try {
      const token = localStorage.get('token');
      const response = await axios.post(`${ip}/restaurants`, obj, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      return response;
    } catch (error) {
      return error;
    }
  }

  async delete(restaurantId) {
    try {
      const token = localStorage.get('token');
      const response = await axios.delete(`${ip}/restaurants/${restaurantId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      return response;
    } catch (error) {
      return error;
    }
  }
}

decorate(Restaurant, {
  add: action,
  delete: action
})

export default new Restaurant;