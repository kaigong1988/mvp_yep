import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      someState: 'value of state',
      currentZip: 11354,
      currentCoords: {
        lat: 0,
        long: 0,
      },
      currentUser: 'default',
    };
  }

  render() {
    if (this.state.currentUser === 'customer') {
      return <div>I am an eater!</div>;
    } else if (this.state.currentUser === 'owner') {
      return <div>I am an owner!</div>;
    } else {
      return (
        <div>
          <input />
          <button>Use my current location</button>
        </div>
      );
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
