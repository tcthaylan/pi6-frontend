import React, { Component } from 'react';
import './Index.css';
import localStorage from '../../../utils/localStorage';
import { inject } from 'mobx-react';
import RestaurantAdmin from '../../../components/RestaurantAdmin'

class AdminList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {}
    }
  }

  componentWillMount() {
    const { history } = this.props;

    const token = localStorage.get('token');
    if (!token) history.push('./login');

    this.getUser();
  }

  async getUser() {
    const { Auth, history } = this.props;
    const response = await Auth.getLoggedUser();
    if (response.status !== 200) history.push('./login');

    this.setState({ user: response.data });
  }

  renderRestaurants() {
    const { user } = this.state;
    const { history } = this.props;
    if (user.restaurants) {
      return user.restaurants.map((item, i) => (
        <RestaurantAdmin
          restaurantId={item._id}
          image={`restaurant0${i + 1}.jpg`}
          name={item.name}
          desc="Mollit id consequat consectetur laborum pariatur "
          history={history}
        />
      ))
    } else {
      return (
        <div>ola</div>
      )
    }
  }

  render() {
    const { history } = this.props;
    return(
      <div className="admin-container">
        <div className="admin-header">
          <h1>Gerêncie seus restaurantes</h1>
          <p>Excepteur officia deserunt id occaecat sunt.</p>
        </div>
        <div className="admin-addRestaurant">
          <button onClick={() => {
            history.push({
              pathname: "/admin/addRestaurant"
            })
          }}>Adicionar novo restaurante</button>
        </div>
        <div className="admin-restaurantList">
          {this.renderRestaurants()}
        </div>
        {/* <div className="admin-paginate">
          paginação
        </div> */}
      </div>
    )
  }
}

export default inject('Auth')(AdminList);