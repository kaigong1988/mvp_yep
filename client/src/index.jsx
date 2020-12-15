import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      someState: 'value of state',
      currentZip: 10000,
      currentCoords: {
        latitude: 0,
        longitude: 0,
      },
      restaurants: [],
      currentUser: 'default',
    };
    this.getCurrentZip = this.getCurrentZip.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }
  changeUser(user) {
    this.setState({ currentUser: user });
  }

  // get current zip code by using geolocation to get location coordinates then perform a reverse geocoding
  getCurrentZip() {
    var lat, long;
    navigator.geolocation.getCurrentPosition((position) => {
      const keys = require('../../config.js');
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
          console.log(data.results[0].address_components[7].long_name);
          this.setState({
            currentZip: data.results[0].address_components[7].long_name,
            currentUser: 'customer',
          });
        });
    });
  }

  render() {
    if (this.state.currentUser === 'customer') {
      return (
        <div>
          I am an eater!
          {this.state.currentCoords.latitude}
          {this.state.currentCoords.longitude}
        </div>
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
          <input />
          <button
            onClick={() => {
              this.changeUser('loading');
              // use axios call as promise, after result has returned change the state, then show the results
              setTimeout(() => {
                this.changeUser('customer');
              }, 1000); // placeholder function that will show restaurants after get the results
            }}
          >
            Search
          </button>
          <button
            onClick={() => {
              this.changeUser('loading');
              this.getCurrentZip();
              // use axios call as promise, after result has returned change the state, then show the results
            }}
          >
            Use my current location
          </button>
        </div>
      );
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
