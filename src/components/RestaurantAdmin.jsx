import React from 'react'
import './RestaurantAdmin.css'
import Modal from '../components/modals/Modal'

class RestaurantAdmin extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: {
        name: '',
        data: {},
      },
    }

    this.closeModal = this.closeModal.bind(this);
  }
  
  openModal(name, data = []) {
    this.setState({ modal: { name, data } });
  }

  closeModal() {
    this.setState({ modal: { name: '', data: {} } });
  }

  render() {
    const { 
      history, name, starts, minutes, distance, desc, image, restaurantId,
    } = this.props;
    const { modal } = this.state;
    const url = `http://localhost:3000/files/${image}`
    return(
      <React.Fragment>
        <div className="restaurant-admin">
          <img src={url} className="restaurant-admin-image"/>
          <div className="restaurant-admin-card">
            <div className="container-name-starts">
              <h2 className="restaurant-admin-name">{name}</h2>
              <p className="restaurant-admin-starts">{starts}</p>
            </div>
            <p className="restaurant-admin-desc">{desc}</p>
            <div className="restaurant-admin-buttons">
              <button 
                className="restaurant-admin-btnEdit"
                onClick={() => {
                  history.push({
                    pathname: '/admin/editRestaurant'
                  })
                }}
              >Editar</button>
                <button 
                className="restaurant-admin-btnDelete"
                onClick={() => {
                  this.openModal('delete', {
                    restaurantId,
                    name,
                    url
                  });
                }}
              >Excluir</button>
            </div>
          </div>
        </div>
        {modal.name ? (
          <Modal
            modal={modal}
            closeModal={this.closeModal}
            updateItens={this.updateItens}
            history={history}
            openModal={this.openModal}
          />
        ) : null}
      </React.Fragment>
    )
  }
}

export default RestaurantAdmin