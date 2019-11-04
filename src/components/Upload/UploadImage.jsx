import React, { Component } from 'react';
import Dropzone from 'react-dropzone'
import './UploadImage.css';
import UploadList from '../Upload/UploadList';


export default class UploadImage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { handleUpload, uploadedFiles } = this.props;
    return (
      <div className="uploadImage-container">
        <Dropzone accept="image/*" onDropAccepted={handleUpload} >
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
        {!!uploadedFiles.length && 
          <UploadList files={uploadedFiles}/>
        }
      </div>
    );
  }
}
