import React from 'react'
import './Index.css'
import Restaurant from '../../../components/Restaurant'
import Map from '../../../components/Map';
import { inject } from 'mobx-react';

class RestaurantList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      geocodingAddress: "",
      restaurants: []
    }
  }

  async componentDidMount() {
    const { history } = this.props;
    const { state } = history.location;
    if (state !== undefined && state.length) {
      const data = JSON.parse(state);
      this.setState({ geocodingAddress: data });
      this.getRestaurants();
    } else {
      history.push({
        pathname: '../',
      });
    }
  }

  async getRestaurants() {
    const { Restaurant } = this.props;
    const response = await Restaurant.getAll();
    this.setState({restaurants: response})
  }

  renderRestaurants() {
    const { restaurants } = this.state;
    const { history } = this.props;
    return restaurants.map((item, i) => 
      <li className="restaurantList-item">
        <Restaurant 
          history={history}
          image={item.picture}
          name={item.name}
          stars="4.4"
          minutes="15"
          distance="2.4"
          desc="Quis voluptate velit anim reprehenderit quis Lorem qui. Est consequat culpa laborum ea proident fugiat nostrud irure qui deserunt."
        />
      </li>
    )
  }

  render() {
    const { history } = this.props;
    const { geocodingAddress } = this.state;
    return(
      <div>
        <div className="container-restaurantList">
          <div className="container-restaurantList-text">
            <h1>Lista de restaurantes</h1>
            <p>Adipisicing et laborum esse proident nulla.</p>
          </div>
          <ol className="restaurantList">
            {this.renderRestaurants()}
          </ol>
        </div>
        <div className="restaurant-maps">
          <Map geocodingAddress={geocodingAddress} />
        </div>
      </div>
    )
  }
}

export default inject('Restaurant')(RestaurantList)