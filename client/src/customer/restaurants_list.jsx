import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RestaurantElement from './restaurant_element.jsx';

const RestaurantsList = (props) => {
  if (props.restaurants.length === 0) {
    return <span>please wait for related product to load</span>;
  } else {
    return (
      <div>
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
