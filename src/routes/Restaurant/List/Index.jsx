import React from 'react'
import './Index.css'
import Restaurant from '../../../components/Restaurant'
import Map from '../../../components/Map';

class RestaurantList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      geocodingAddress: ""
    }
  }

  async componentDidMount() {
    const { history } = this.props;
    const { state } = history.location;
    if (state !== undefined && state.length) {
      const data = JSON.parse(state);
      this.setState({ geocodingAddress: data });
    } else {
      history.push({
        pathname: '../',
      });
    }
  }

  render() {
    const { history } = this.props;
    const { geocodingAddress } = this.state;
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
                history={history}
                image="restaurant01.jpg"
                name="Al Capizza 24h "
                stars="4.4"
                minutes="15"
                distance="2.4"
                desc="Quis voluptate velit anim reprehenderit quis Lorem qui. Est consequat culpa laborum ea proident fugiat nostrud irure qui deserunt."
              />
            </li>
          </ol>
        </div>
        <div className="restaurant-maps">
          <Map geocodingAddress={geocodingAddress} />
        </div>
      </div>
    )
  }
}

export default RestaurantList