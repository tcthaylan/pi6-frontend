import React, { Component } from 'react';
import Dropzone from 'react-dropzone'
import './UploadImage.css';
import UploadList from '../Upload/UploadList';

export default class UploadImage extends Component {
  render() {
    return (
      <div className="uploadImage-container">
        <Dropzone accept="image/*" onDropAccepted={() => {}} >
          { ({ getRootProps, getInputProps, isDragActive, isDragReject }) => 
            <div 
              className={
                isDragActive ? "dropContainer dropContainer-green" : "dropContainer"
              }
              {...getRootProps()}
              isDragActive={isDragActive}
              isDragReject={isDragReject}
            >
              <input {...getInputProps()} />
              Jogue a sua imagem aqui
            </div>
          }
        </Dropzone>
        <UploadList/>
      </div>
    );
  }
}
