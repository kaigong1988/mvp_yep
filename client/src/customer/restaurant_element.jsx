import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RestaurantElement = (props) => {
  const [distance, setDistance] = useState('');

  useEffect(() => {
    axios
      .get(`/distance/?org=${props.currentPlaceId}&des=${props.info.place_id}`)
      .then((result) => {
        setDistance(result.data);
      });
  }, []);

  return (
    <div>
      <h3>{props.info.name}</h3>
      <p>
        {props.info.description}
        <br />
        {props.info.address}
        <br />
        {props.info.phone}
        <br />
        {distance}
      </p>
    </div>
  );
};

export default RestaurantElement;
