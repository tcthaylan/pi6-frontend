import React from 'react'
import './Restaurant.css'

const Restaurant = (props) => {
  const { history } = props;
  return(
    <div className="restaurant">
      <img src="/images/restaurants/restaurant01.jpg" className="restaurant-image"/>
      <div className="restaurant-card">
        <div className="container-name-starts">
          <h2 className="restaurant-name">Al Capizza 24h - Pinheiros</h2>
          <p className="restaurant-starts">4.1</p>
        </div>
        <div className='restaurant-details'>
          <p className="restaurant-details-minutes">15 min</p>
          <p className="restaurant-details-distance">2.5km</p>
        </div>
        <p className="restaurant-desc">Quis voluptate velit anim reprehenderit quis Lorem qui. Est consequat culpa laborum ea proident fugiat nostrud irure qui deserunt.</p>
        <button 
          className="restaurant-btnMenu"
          onClick={() => {
            history.push({
              pathname: 'restaurante/menu'
            })
          }}
        >View menu</button>
      </div>
    </div> 
  )
}

export default Restaurant