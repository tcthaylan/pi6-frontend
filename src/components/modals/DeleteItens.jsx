import React from 'react';
import './DeleteItens.css';
import { inject } from 'mobx-react';

const deleteRestaurant = async (Restaurant, restaurantId, closeModal) => {
  await Restaurant.delete(restaurantId);
  closeModal();
}

const DeleteItens = props => {
  const { closeModal, data, Restaurant } = props;
  return(
    <div className="modal-deleteItens-container">
      <div className="modal-header">
        <h2>Excluir restaurante</h2>
      </div>
      <div className="modal-body">
        <h3>Você tem certeza que dejesa excluir este item?</h3>
        <div className="modal-body-item">
          <img src={data.url} className="modal-img"/>
          <p>{data.name}</p>
        </div>
      </div>
      <div className="modal-footer">
        <button onClick={() => {
          deleteRestaurant(Restaurant, data.restaurantId, closeModal);
        }}>Confirmar</button>
        <button onClick={closeModal}>Fechar</button>
      </div>
    </div>
  )
}

export default inject('Restaurant')(DeleteItens);