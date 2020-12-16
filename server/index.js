const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;
const { nearRestaurants } = require('../database/mysql/controllers.js');

const app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.get('/route', (req, res) => {
  res.status(200).json('Server is working!');
});

app.get('/restaurants/:zipcode', nearRestaurants);

app.listen(port, () => {
  console.log(`App is running at http://localhost:${port}`);
});
