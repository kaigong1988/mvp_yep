import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';

const RestaurantElement = (props) => {
  const [distance, setDistance] = useState('');

  useEffect(() => {
    axios
      .get(`/distance/?org=${props.currentPlaceId}&des=${props.info.place_id}`)
      .then((result) => {
        setDistance(result.data);
      });
  }, [props.info.place_id]);

  return (
    <div className="card-container">
      <img className="carousel" src={props.info.photos[0]} />
      <div className="description">
        <h3>{props.info.name}</h3>
        <Rating
        value={props.info.scores[0].rating}
        precision={0.1}
        readOnly
        size="small"
        id="main-stars"
      />
        <p><b>{distance}</b><br />
          {props.info.description}
          <br />
          {props.info.address}
          <br />
          {props.info.phone}


        </p>
      </div>
    </div>
  );
};

export default RestaurantElement;
