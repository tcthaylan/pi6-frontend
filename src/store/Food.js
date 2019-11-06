import { decorate, action } from "mobx";
import axios from 'axios';
import { ip } from '../utils/config';

class Food {
  async getFoodsByName(foodName) {
    try {
      const response = await axios.get(`${ip}/client/foods/${foodName}`, {
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

decorate(Food, {
  getFoodsByName: action,
})

export default new Food