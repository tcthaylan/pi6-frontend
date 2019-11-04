import { decorate, observable, action, computed } from "mobx"
import axios from 'axios';
import { ip } from '../utils/config'
import localStorage from '../utils/localStorage'

class Restaurant {
  async add(obj) {
    console.log(obj)
    try {
      const data = new FormData();
      data.append('picture', obj.file)
      data.append('name', obj.name)
      data.append('endereco', obj.endereco)
      data.append('numero', obj.numero)
      data.append('bairro', obj.bairro)
      data.append('complemento', obj.complemento)
      data.append('cep', obj.cep)
      data.append('uf', obj.uf)
      data.append('cidade', obj.cidade)
      data.append('description', obj.description)

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
    // try {
    //   
    // } catch (error) {
    //   return error;
    // }
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
      console.log(error)
      return error;
    }
  }
}

decorate(Restaurant, {
  add: action,
  delete: action,
  getAll: action
})

export default new Restaurant;