import React, { Component } from 'react';
import './UploadList.css'
import  { CircularProgressbar }  from 'react-circular-progressbar'
import { MdCheckCircle, MdError, MdLink } from 'react-icons/md'

export default class UploadList extends Component {
  render() {
    return (
      <div className="fileList-container">
        <li>
          <div className="fileInfo">
            <img src="http://localhost:3000/files/40a57f8809abe8dcb36a99f2f80ddc11-restaurant06.jpg" className="preview"/>
            <div>
              <strong>profile.png</strong>
              <span>64kb <button>Excluir</button></span>
            </div>
          </div>
          <div>
            <CircularProgressbar
              styles={{
                root: { width: 24 },
                path: { stroke: '#7159c1' }
              }}
              strokeWidth={10}
              percentage={60}
            />
            <a 
              href="http://localhost:3000/files/40a57f8809abe8dcb36a99f2f80ddc11-restaurant06.jpg"
              target="_blank"
            >
              <MdLink style={{marginRight: 8}} size={24} color="#222" />
            </a>
            <MdCheckCircle size={24} color="#78e5d5" />
            <MdError size={24} color="#e57878" />
          </div>
        </li>
      </div>
    );
  }
}
