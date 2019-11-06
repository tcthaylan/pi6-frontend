import React, { Component } from 'react';
import './Index.css'
// import { Container } from './styles';

export default class FoodList extends Component {
  render() {
    return (
      <div className="foodList-container">
        <div className="foodList-header">
          <p>Preços em <span>19 restaurantes</span></p>
        </div>
        <ul className="foodList-list">
          <li className="foodList-list-item">
            <img
              className="foodList-list-item-img" 
              src="http://localhost:3000/files/47b531fb06abeb2d292ffba214106186-restaurant04.jpg" />
            <p className="foodList-list-item-price">R$ 30,00</p>
            <button className="foodList-list-item-btn">Restaurante</button>
          </li>
          <li className="foodList-list-item">
            <img
              className="foodList-list-item-img" 
              src="http://localhost:3000/files/47b531fb06abeb2d292ffba214106186-restaurant04.jpg" />
            <p className="foodList-list-item-price">R$ 30,00</p>
            <button className="foodList-list-item-btn">Restaurante</button>
          </li>
          <li className="foodList-list-item">
            <img
              className="foodList-list-item-img" 
              src="http://localhost:3000/files/47b531fb06abeb2d292ffba214106186-restaurant04.jpg" />
            <p className="foodList-list-item-price">R$ 30,00</p>
            <button className="foodList-list-item-btn">Restaurante</button>
          </li>
          <li className="foodList-list-item">
            <img
              className="foodList-list-item-img" 
              src="http://localhost:3000/files/47b531fb06abeb2d292ffba214106186-restaurant04.jpg" />
            <p className="foodList-list-item-price">R$ 30,00</p>
            <button className="foodList-list-item-btn">Restaurante</button>
          </li>
          <li className="foodList-list-item">
            <img
              className="foodList-list-item-img" 
              src="http://localhost:3000/files/47b531fb06abeb2d292ffba214106186-restaurant04.jpg" />
            <p className="foodList-list-item-price">R$ 30,00</p>
            <button className="foodList-list-item-btn">Restaurante</button>
          </li>
          <li className="foodList-list-item">
            <img
              className="foodList-list-item-img" 
              src="http://localhost:3000/files/47b531fb06abeb2d292ffba214106186-restaurant04.jpg" />
            <p className="foodList-list-item-price">R$ 30,00</p>
            <button className="foodList-list-item-btn">Restaurante</button>
          </li>
        </ul>
      </div>
    )
  }
}
