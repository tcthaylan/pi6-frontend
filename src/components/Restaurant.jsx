import React from 'react'
import './Restaurant.css'
import { ip } from '../utils/config'

const Restaurant = (props) => {
  const { 
    history, name, starts, minutes, distance, desc, image, id 
  } = props;
  const url = `${ip}/files/${image}`
  return(
    <div className="restaurant">
      <img src={url} className="restaurant-image"/>
      <div className="restaurant-card">
        <div className="container-name-starts">
          <h2 className="restaurant-name">{name}</h2>
          <p className="restaurant-starts">{starts}</p>
        </div>
        <div className='restaurant-details'>
          <p className="restaurant-details-minutes">{`${minutes} min`}</p>
          <p className="restaurant-details-distance">{`${distance} km`}</p>
        </div>
        <p className="restaurant-desc">{desc}</p>
        <button 
          className="restaurant-btnMenu"
          onClick={() => {
            history.push({
              pathname: '/restaurantes/menu/list',
              state: JSON.stringify(id) 
            })
          }}
        >View menu</button>
      </div>
    </div> 
  )
}

export default Restaurant