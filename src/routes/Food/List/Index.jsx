import React, { Component } from 'react';
import './Index.css'
import { inject } from 'mobx-react';
// import { Container } from './styles';
import { ip } from '../../../utils/config'

class FoodList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pizzas: []
    }
  }

  async componentDidMount() {
    const { Food, history } = this.props;
    const foodName = JSON.parse(history.location.state);
    
    const response = await Food.getFoodsByName(foodName);
    if (response.status === 200) {
      this.setState({ pizzas: response.data })
    }
  } 

  renderPizzas() {
    const { pizzas } = this.state;
    const { history } = this.props;
    return pizzas.map(item => (
      <li className="foodList-list-item">
        <img
          className="foodList-list-item-img" 
          src={`${ip}/files/${item.picture}`} />
        <p className="foodList-list-item-price">R$ {item.price.toFixed(2).replace('.', ',')}</p>
        <button 
          className="foodList-list-item-btn"
          onClick={() => {
            history.push({
              pathname: '/restaurantes/menu/list',
              state: JSON.stringify(item.restaurant_id)
            })
          }}
        >Restaurante</button>
      </li>
    ))
  }

  render() {
    const { pizzas } = this.state;
    return (
      <div className="foodList-container">
        <div className="foodList-header">
          <p>Preços em <span>{pizzas.length} restaurantes</span></p>
        </div>
        <ul className="foodList-list">
          {pizzas && this.renderPizzas()}
        </ul>
      </div>
    )
  }
}

export default inject('Food')(FoodList)