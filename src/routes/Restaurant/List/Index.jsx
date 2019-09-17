import React from 'react'
import './Index.css'
import Restaurant from '../../../components/Restaurant'

class RestaurantList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <div className="container-restaurantList">
          <div className="container-restaurantList-text">
            <h1>Quis esse amet voluptate</h1>
            <p>Adipisicing et laborum esse proident nulla.</p>
          </div>
          <ol className="restaurantList">
            <li className="restaurantList-item">
              <Restaurant 
                image="restaurant01.jpg"
                name="Al Capizza 24h "
                stars="4.4"
                minutes="15"
                distance="2.4"
                desc="Quis voluptate velit anim reprehenderit quis Lorem qui. Est consequat culpa laborum ea proident fugiat nostrud irure qui deserunt."
              />
            </li>
            <li className="restaurantList-item">
              <Restaurant 
                image="restaurant02.jpg"
                name="Kisoji Sushi"
                stars="4.2"
                minutes="15"
                distance="2.4"
                desc="Quis voluptate velit anim reprehenderit quis Lorem qui. Est consequat culpa laborum ea proident fugiat nostrud irure qui deserunt."
              />
            </li>
            <li className="restaurantList-item">
              <Restaurant 
                image="restaurant03.jpg"
                name="Istambul"
                stars="2.4"
                minutes="15"
                distance="2.4"
                desc="Quis voluptate velit anim reprehenderit quis Lorem qui. Est consequat culpa laborum ea proident fugiat nostrud irure qui deserunt."
              />
            </li>
            <li className="restaurantList-item">
              <Restaurant 
                image="restaurant04.jpg"
                name="Johnny Rockets"
                stars="4.4"
                minutes="33"
                distance="2.4"
                desc="Quis voluptate velit anim reprehenderit quis Lorem qui. Est consequat culpa laborum ea proident fugiat nostrud irure qui deserunt."
              />
            </li>
            <li className="restaurantList-item">
              <Restaurant 
                image="restaurant05.jpg"
                name="Black Dog"
                stars="4.4"
                minutes="10"
                distance="2.4"
                desc="Quis voluptate velit anim reprehenderit quis Lorem qui. Est consequat culpa laborum ea proident fugiat nostrud irure qui deserunt."
              />
            </li>
            <li className="restaurantList-item">
              <Restaurant 
                image="restaurant06.jpg"
                name="Poke Haus"
                stars="3.4"
                minutes="12"
                distance="2.4"
                desc="Quis voluptate velit anim reprehenderit quis Lorem qui. Est consequat culpa laborum ea proident fugiat nostrud irure qui deserunt."
              />
            </li>
          </ol>
        </div>
        <div className="restaurant-maps">
          <h1 className="restaurant-maps-title">Exemplo mapa</h1>
          <img src="/images/maps-example.png" className="restaurant-maps-img" />
        </div>
      </div>
    )
  }
}

export default RestaurantList