import React from 'react';
import axios from 'axios';

const RestaurantsList = (props) => {
  const getDistance = (org, des) => {
    return axios
      .get(`/distance/?org=${org}&des=${des}`)
      .then((result) => {
        return result;
      })
      .catch((err) => {
        console.log('We run into an error, please try again.');
      });
  };
  if (props.restaurants.length === 0) {
    return <span>please wait for related product to load</span>;
  } else {
    return (
      <div>
        <ul>
          {props.restaurants.map((item, index) => {
            getDistance(props.currentPlaceId, item.place_id).then((result) => {
              return (
                <div>
                  <h3>{item.name}</h3>
                  <p>
                    {item.description}
                    <br />
                    {item.address}
                    <br />
                    {item.phone}

                    <br />
                    {result}
                  </p>
                </div>
              );
            });
          })}
        </ul>
      </div>
    );
  }
};

export default RestaurantsList;
