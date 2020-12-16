import React from 'react';
import ReactDOM from 'react-dom';
import Restaurants_list from './customer/restaurants_list.jsx';
import axios from 'axios';

const keys = require('../../config.js');

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      someState: 'value of state',
      currentZip: 10000,
      currentPlaceId: 0,
      currentCoords: {
        latitude: 0,
        longitude: 0,
      },
      currentAddress: '',
      restaurants: [],
      currentUser: 'default',
    };
    this.getCurrentZipByCoords = this.getCurrentZipByCoords.bind(this);
    this.getCurrentZipByAddress = this.getCurrentZipByAddress.bind(this);
    this.changeUser = this.changeUser.bind(this);
    this.getRestaurants = this.getRestaurants.bind(this);
  }
  changeUser(user) {
    this.setState({ currentUser: user });
  }

  getCurrentZipByAddress() {
    const addressStr = this.state.currentAddress;
    const address = addressStr.split(' ').join('+');
    let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${keys.geoAPI}`;
    fetch(url)
      .then((response) => response.json())
      .catch((err) => console.log(err))
      .then((data) => {
        this.setState({
          currentZip: data.results[0].address_components[7].long_name,
          currentPlaceId: data.results[0].place_id,
          currentUser: 'customer',
        });
        this.getRestaurants(data.results[0].address_components[7].long_name);
      });
  }

  // get current zip code by using geolocation to get location coordinates then perform a reverse geocoding
  getCurrentZipByCoords() {
    var lat, long;
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lng = position.coords.longitude;
      let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${keys.geoAPI}`;
      this.setState({
        currentCoords: { latitude: lat, longitude: lng },
      });
      fetch(url)
        .then((response) => response.json())
        .catch((err) => console.log(err))
        .then((data) => {
          this.setState({
            currentZip: data.results[0].address_components[7].long_name,
            currentPlaceId: data.results[0].place_id,
            currentUser: 'customer',
          });
          this.getRestaurants(data.results[0].address_components[7].long_name);
        });
    });
  }

  getRestaurants(zipcode) {
    return axios
      .get(`/restaurants/${zipcode}`)
      .then((results) => {
        this.setState({ restaurants: results.data });
      })
      .catch((err) => {
        console.log('We run into an error, please try again.');
      });
  }

  render() {
    if (this.state.currentUser === 'customer') {
      return (
        <Restaurants_list
          currentPlaceId={this.state.currentPlaceId}
          restaurants={this.state.restaurants}
        />
      );
    } else if (this.state.currentUser === 'owner') {
      return <div>I am an owner!</div>;
    } else if (this.state.currentUser === 'loading') {
      return (
        <div>
          <img src="./spinner.gif" />
        </div>
      );
    } else {
      return (
        <div>
          <input
            id="address"
            type="textbox"
            onChange={(e) => this.setState({ currentAddress: e.target.value })}
          />
          <input
            id="submit"
            type="button"
            value="Search"
            onClick={() => {
              this.changeUser('loading');
              this.getCurrentZipByAddress();
            }}
          />
          <div>
            <button
              onClick={() => {
                this.changeUser('loading');
                this.getCurrentZipByCoords();
                // use axios call as promise, after result has returned change the state, then show the results
              }}
            >
              Use my current location
            </button>
          </div>
        </div>
      );
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
