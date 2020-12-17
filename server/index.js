const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;
const { nearRestaurants } = require('../database/mysql/controllers.js');
const axios = require('axios');
const keys = require('../config.js');

const app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

const getDistance = (req, res) => {
  let url = `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=place_id:${req.query.org}&destinations=place_id:${req.query.des}&key=${keys.geoAPI}`;
  axios(url)
    .then((response) => {
      res.send(response.data.rows[0].elements[0].distance.text);
    })
    .catch((err) => console.log(err));
};

app.get('/route', (req, res) => {
  res.status(200).json('Server is working!');
});

app.get('/distance/?', getDistance);
app.get('/restaurants/:zipcode', nearRestaurants);

app.listen(port, () => {
  console.log(`App is running at http://localhost:${port}`);
});
