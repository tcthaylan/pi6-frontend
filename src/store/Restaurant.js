import { decorate, observable, action, computed } from "mobx"
import axios from 'axios';
import { ip } from '../utils/config'
import localStorage from '../utils/localStorage'

class Restaurant {
  async add(obj) {
    try {
      const data = new FormData();
      const endereco = { 
        endereco: obj.endereco.endereco,
        numero: obj.endereco.numero,
        bairro: obj.endereco.bairro,
        complemento: obj.endereco.complemento,
        cep: obj.endereco.cep,
        uf: obj.endereco.uf,
        cidade: obj.endereco.cidade,
      }
      data.append('picture', obj.file)
      data.append('name', obj.name)
      data.append('description', obj.description)
      data.append('endereco', JSON.stringify(endereco))
      const token = localStorage.get('token');
      const response = await axios.post(`${ip}/restaurants`, data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      return response;

    } catch (error) {
      return error
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

  async getAll() {
    try {
      const response = await axios.get(`${ip}/client/restaurants`)
      return response.data;
    } catch (error) {
      return error;
    }
  }

  async getFoods(restaurantId) {
    try {
      console.log(restaurantId)
      const response = await axios.get(`${ip}/client/${restaurantId}/foods`, {
        headers: {
         'Content-Type': 'application/json'
        }
      });
      console.log(response)
      return response
    } catch (error) {
      return error
    }
  }
}

decorate(Restaurant, {
  add: action,
  delete: action,
  getAll: action,
  getFoods: action
})

export default new Restaurant;