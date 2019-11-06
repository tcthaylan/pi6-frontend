import React from 'react'
import './MenuItem.css'

const MenuItem = (props) => {
  const { name, desc, price, image } = props;
  const url = `http://localhost:3000/files/${image}`
  return (
    <div className="menuItem">
      <img src={url} className="menuItem-img"/>
      <div className="menuItem-text">
        <h4 className="menuItem-text-title">{name}</h4>
        <p className="menuItem-text-desc">{desc}</p>
        <p className="menuItem-text-price">{price}</p>
      </div>
    </div>
  )
}

export default MenuItem