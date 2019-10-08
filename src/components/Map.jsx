import React, { Component } from 'react';
import './Map.css';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import axios from 'axios';
import { inject } from 'mobx-react'
const mapStyles = {
  width: '100%',
  height: '500px',
  maxHeight: '500px'
};

const apyKey = "AIzaSyCcZo6RgKRy-vjVBiCdZhGrdY154Dt6CFg"

const getMarkersApi = async (formatedAddress, index, markers) => {
  if (index === formatedAddress.length) return markers;

  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${formatedAddress[index]}&key=${apyKey}`
  const response = await axios.get(url)

  markers.push(response.data.results[0].geometry.location)
  getMarkersApi(formatedAddress, index + 1, markers)
}

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMap: false,
      geocodingLat: 0,
      geocodingLng: 0,
      markers: []
    }
  }

  async componentWillMount() {
    const { geocodingAddress } = this.props;
    const location = await this.getInitialCenter(geocodingAddress);
    const markers = await this.getMarkers();
    this.setState({
      showMap: true,
      geocodingLat: location.lat,
      geocodingLng: location.lng,
      markers
    })
  }

  async getInitialCenter(address) {
    const formatedAddress = address.trim().replace(/ /g, '%20');
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${formatedAddress}&key=${apyKey}`
    const response = await axios.get(url)
    return response.data.results[0].geometry.location;
  }

  async getMarkers() {
    const { Restaurant } = this.props;
    const restaurants = await Restaurant.getAll();
    const formatedAddress = []
    restaurants.forEach(item => {
      const string = `${item.endereco.endereco}, ${item.endereco.numero} - ${item.endereco.bairro}, ${item.endereco.cidade} - ${item.endereco.uf}`

      formatedAddress.push(string.trim().replace(/ /g, '%20'))
    })
    
    const markers = [];

    await Promise.all(formatedAddress.map(async item => {
      const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${item}&key=${apyKey}`
      const response = await axios.get(url)
      markers.push(response.data.results[0].geometry.location)
    }))

    return markers;
  }

  renderMarkers() {
    const { markers } = this.state;
    return markers.map(item => <Marker position={{ lat: item.lat, lng: item.lng}} />)
  }

  renderMap() {
    const { geocodingLat, geocodingLng } = this.state
    return(
      <div>
        <Map
          google={this.props.google}
          zoom={18}
          style={mapStyles}
          initialCenter={{ lat: geocodingLat, lng: geocodingLng}}
        >
          {this.renderMarkers()}
        </Map>
      </div>
    )
  }

  render() {
    const { showMap } = this.state
    return(
      <React.Fragment>
        {!showMap ? (
            <div className="progressLoading">
              kkk
            </div>
          ) : this.renderMap()}
      </React.Fragment> 
    )
  }
}

export default GoogleApiWrapper({
  apiKey: apyKey
})(inject('Restaurant')(MapContainer));