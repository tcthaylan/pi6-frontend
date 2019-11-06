import React from 'react'
import './Index.css'
import MenuItem from '../../../components/MenuItem'
import { inject } from 'mobx-react'

class MenuList  extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      menu: []
    }
  }

  async componentDidMount() {
    const { history, Restaurant } = this.props;
    const restaurantId = JSON.parse(history.location.state);
    const response = await Restaurant.getFoods(restaurantId)
    if (response.status === 200) {
      this.setState({ menu: response.data.foods})
    }
  }

  renderFoods() {
    const { menu } = this.state;

    return menu.map(item =>  (
      
      <li className="menu-list-item">
        <MenuItem
          name={item.name}
          price={item.price}
          desc={item.description}
          image={item.picture}
        />
      </li>
    )

    )
  }

  render() {
    const { menu } = this.state;
    return(
      <div className="menuContainer">
        <div className="banner-menu"/>
        <div className="menu">
          <h2 className="menu-title">Menu</h2>
          <div className="menu-filters">
            <h4>Filtrar por</h4>
            <button>Entrega</button>
            <button>Cozinha</button>
            <button>Pagamento</button>
          </div>
          <ol className="menu-list">
            
            {menu.length && this.renderFoods()}
          </ol>
        </div>
        {/* <div className="paginate">
          <ol className="paginate-list">
            <li>{'<'}</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>{'>'}</li>
          </ol>
        </div> */}
      </div>
    )
  }
}

export default inject('Restaurant')(MenuList)