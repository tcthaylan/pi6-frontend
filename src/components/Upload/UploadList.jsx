import React, { Component } from 'react';
import './UploadList.css'
import  { CircularProgressbar }  from 'react-circular-progressbar'
import { MdCheckCircle, MdError, MdLink } from 'react-icons/md'

const UploadList = ({ files }) => {
  return (
    <div className="fileList-container">
      {files.map(uploadedFile => (
        <li>
          <div className="fileInfo">
            <img src={uploadedFile.preview} className="preview"/>
            <div>
              <strong>{uploadedFile.name}</strong>
              <span>{uploadedFile.readableSize}
                {!!uploadedFile.url && (
                   <button>Excluir</button>
                )}
              </span>
            </div>
          </div>
          <div>
            {!uploadedFile.uploaded && !uploadedFile.error && (
              <CircularProgressbar
                styles={{
                  root: { width: 24 },
                  path: { stroke: '#7159c1' }
                }}
                strokeWidth={10}
                percentage={uploadedFile.progress}
              />
            )}
           {uploadedFile.url && (
              <a 
                href={uploadedFile.preview}
                target="_blank"
              > 
                <MdLink style={{marginRight: 8}} size={24} color="#222" />
              </a>
           )}
            {uploadedFile.uploaded && <MdCheckCircle size={24} color="#78e5d5" />}
            {uploadedFile.error && <MdError size={24} color="#e57878" />}
          </div>
        </li>
      ))}
    </div>
  );

}

export default UploadList