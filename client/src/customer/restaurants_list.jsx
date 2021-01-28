import React from 'react';
import axios from 'axios';
import RestaurantElement from './restaurant_element.jsx';

const RestaurantsList = (props) => {
  if (props.restaurants.length === 0) {
    return <span>please wait for related product to load</span>;
  } else {
    return (
      <div className="container">
        <div>
          <input
            id="address"
            type="textbox"
            onChange={(e) => props.changeCurrentAddress(e.target.value)}
          />
          <input
            id="submit"
            type="button"
            value="Search"
            onClick={() => {
              props.changeUser('loading');
              props.getCurrentZipByAddress();
            }}
          />
          <div>
            <button
              onClick={() => {
                props.changeUser('loading');
                props.getCurrentZipByCoords();
                // use axios call as promise, after result has returned change the state, then show the results
              }}
            >
              Use my current location
            </button>
          </div>
        </div>
        <ul>
          {props.restaurants.map((item, index) => {
            return (
              <RestaurantElement
                info={item}
                currentPlaceId={props.currentPlaceId}
              />
            );
          })}
        </ul>
      </div>
    );
  }
};

export default RestaurantsList;
