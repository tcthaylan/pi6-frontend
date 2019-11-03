import React from 'react';
import './Index.css';
import { inject } from 'mobx-react';

const checkFields = () => {
  const fields = document.querySelectorAll('.form-group input')
  const emptyFields = []
  fields.forEach(item => {
    if (!item.value) {
      emptyFields.push(item.id)
    }
  })
  return emptyFields;
}

const markEmptyField = (emptyFields) => {
  const fields = document.querySelectorAll('.form-group input')
  fields.forEach(item => {
    if (emptyFields.includes(item.id)) {
      item.style.borderColor = '#f22248';
    } else {
      item.style.borderColor = '#ddd';
    }
  })
}

const createObject = () => {
  const fields = document.querySelectorAll('.form-group input');
  let obj = {}
  obj['name'] = fields[0].value;
  obj['email'] = fields[1].value;
  obj['password'] = fields[2].value;
  return obj;
}

class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  async addUser() {
    const { Auth, history } = this.props;
    const obj = createObject();
    const response = await Auth.signUp(obj)
    if (response.status === 200) {
      history.push('./login')
    } else {
      // email inválido
    }
  }

  render() {
    const { history } = this.props;
    return (
      <div className="adminAdd-container">
        <div className="adminAddRestaurant-header">
          <h1>Criar conta</h1>
        </div>
        <div className="adminAddRestaurant-form">
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input type="text" id="name"/>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" id="email"/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <input type="password" id="password"/>
          </div>
        </div>
        <div className="adminAddRestaurant-buttons">
          <button 
            onClick={() => {
              const emptyFields = checkFields();
              if (!emptyFields.length) {
                this.addUser();
              } else {
                markEmptyField(emptyFields);
              }
              
            }}
          >Criar</button>
          <button 
            onClick={() => {
              history.push('../')
            }}
          >Cancelar</button>
        </div>
      </div>
    )
  }
}

export default inject('Auth')(Register);