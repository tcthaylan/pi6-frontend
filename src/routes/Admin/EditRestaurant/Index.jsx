import React from 'react';
import './Index.css';

class AdminEditRestaurant extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { history } = this.props;
    return (
      <div className="adminEdit-container">
        <div className="adminEditRestaurant-header">
          <h1>Editar restaurante</h1>
        </div>
        <div className="adminEditRestaurant-form">
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input type="text" id="name"/>
          </div>
          <div className="form-group">
            <label htmlFor="description">Descrição</label>
            <input type="text" id="description"/>
          </div>

          <div className="form-group">
            <label htmlFor="endereco">Endereço</label>
            <input type="text" id="endereco"/>
          </div>
          <div className="form-group">
            <label htmlFor="numero">Número</label>
            <input type="text" id="numero"/>
          </div>
          <div className="form-group">
            <label htmlFor="bairro">Bairro</label>
            <input type="text" id="bairro"/>
          </div>
          <div className="form-group">
            <label htmlFor="complemento">Complemento</label>
            <input type="text" id="complemento"/>
          </div>
          <div className="form-group">
            <label htmlFor="cep">CEP</label>
            <input type="text" id="cep"/>
          </div>
          <div className="form-group">
            <label htmlFor="uf">UF</label>
            <input type="text" id="uf"/>
          </div>
          <div className="form-group">
            <label htmlFor="cidade">Cidade</label>
            <input type="text" id="cidade"/>
          </div>
        </div>
        <div className="adminEditRestaurant-buttons">
          <button>Editar</button>
          <button onClick={() => {
            history.push('../admin')
          }}>Cancelar</button>
        </div>
      </div>
    )
  }
}

export default AdminEditRestaurant;