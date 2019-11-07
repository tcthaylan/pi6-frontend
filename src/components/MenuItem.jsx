import React from 'react'
import './MenuItem.css'
import { ip } from '../utils/config'

const MenuItem = (props) => {
  const { name, desc, price, image } = props;
  const url = `${ip}/files/${image}`
  return (
    <div className="menuItem">
      <img src={url} className="menuItem-img"/>
      <div className="menuItem-text">
        <h4 className="menuItem-text-title">{name}</h4>
        <p className="menuItem-text-desc">{desc}</p>
        <p className="menuItem-text-price">R$ {price.toFixed(2).replace('.', ',')}</p>
      </div>
    </div>
  )
}

export default MenuItem