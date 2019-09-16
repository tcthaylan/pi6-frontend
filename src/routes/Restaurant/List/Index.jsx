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
        <ol className="restaurantList">
          <li>
            <Restaurant />
          </li>
        </ol>
      </div>
    )
  }
}

export default RestaurantList