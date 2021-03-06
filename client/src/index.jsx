import React from 'react';
import ReactDOM from 'react-dom';
import Restaurants_list from './customer/restaurants_list.jsx';
import UploadBiz from './owner/UploadBiz.jsx';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';

const keys = require('../../config.js');

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      someState: 'value of state',
      currentZip: 10001,
      currentPlaceId: 0,
      currentCoords: {
        latitude: 0,
        longitude: 0,
      },
      currentAddress: '',
      restaurants: [],
      currentUser: 'owner',
    };
    this.getCurrentZipByCoords = this.getCurrentZipByCoords.bind(this);
    this.getCurrentZipByAddress = this.getCurrentZipByAddress.bind(this);
    this.changeUser = this.changeUser.bind(this);
    this.getRestaurants = this.getRestaurants.bind(this);
    this.changeCurrentAddress = this.changeCurrentAddress.bind(this);
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
    let lat, long;
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
  changeCurrentAddress(str) {
    this.setState({ currentAddress: str });
  }

  render() {
    if (this.state.currentUser === 'customer') {
      return (
        <Restaurants_list
          currentPlaceId={this.state.currentPlaceId}
          restaurants={this.state.restaurants}
          changeUser={this.changeUser}
          getCurrentZipByAddress={this.getCurrentZipByAddress}
          getCurrentZipByCoords={this.getCurrentZipByCoords}
          changeCurrentAddress={this.changeCurrentAddress}
        />
      );
    } else if (this.state.currentUser === 'owner') {
      return <UploadBiz />;
    } else if (this.state.currentUser === 'loading') {
      return (
        <div className="container">
          <div class="lds-default">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container">
          <h1>Search good restaurants near you</h1>
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
