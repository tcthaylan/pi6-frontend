import React from 'react';
import './Index.css';
import { inject } from 'mobx-react';
import UploadImage from '../../../components/Upload/UploadImage'
import { uniqueId } from 'lodash';
import filesize from 'filesize'

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
  obj['description'] = fields[1].value;
  obj['endereco'] = {}
  fields.forEach(item => {
    if (item.id !== "name" && item.id !== "description") {
      obj['endereco'][item.id] = item.value
    }
  })
  return obj;
}

class AdminAddRestaurant extends React.Component {
  constructor(props) {
    super(props);

    this. state = {
      uploadedFiles: []
    };
  }

  handleUpload = files => {
    const uploadedFiles = files.map(file => ({
      file,
      id: uniqueId(),
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      progress: 0,
      uploaded: false,
      error: false,
      url: null,
    }))

    this.setState({
      uploadedFiles: this.state.uploadedFiles.concat(uploadedFiles)
    })
  }

  processUpload = (uploadedFile) => {

  }

  async addRestaurant() {
    const { uploadedFiles } = this.state;
    const { Restaurant, history } = this.props;
    const obj = createObject();
    await Restaurant.add({...obj, file: uploadedFiles[0].file})
    history.push('../admin')
  }

  render() {
    const { uploadedFiles } = this.state
    const { history } = this.props;
    return (
      <div className="adminAdd-container">
        <div className="adminAddRestaurant-header">
          <h1>Adicionar restaurante</h1>
        </div>
        <div className="adminAddRestaurant-form">
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
        <UploadImage uploadedFiles={uploadedFiles} handleUpload={this.handleUpload}/>
        <div className="adminAddRestaurant-buttons">
          <button 
            onClick={() => {
              const emptyFields = checkFields();
              if (!emptyFields.length) {
                this.addRestaurant();
              } else {
                markEmptyField(emptyFields);
              }
              
            }}
          >Adicionar</button>
          <button 
            onClick={() => {
              history.push('../admin')
            }}
          >Cancelar</button>
        </div>
      </div>
    )
  }
}

export default inject('Restaurant')(AdminAddRestaurant);