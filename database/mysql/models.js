var mysql = require('mysql2');
var MYSQL_PW = require('../../config.js');

const dbConnection = mysql.createConnection({
  user: 'root',
  password: MYSQL_PW.MYSQL_PW,
  database: 'mvp_yep',
});

dbConnection.connect(function (err) {
  if (err) {
    console.log('theres an error: ', err);
  } else {
    console.log('connected!');
  }
});

module.exports = {
  getNearRestaurants: function (zipcode, callback) {
    const upRange = Number(zipcode) + 10;
    const LowRange = Number(zipcode) - 10;
    const querStry = `SELECT * ,
(select JSON_ARRAYAGG(JSON_object('rating', rating, 'price', price)) from reviews where reviews.restaurant_id = restaurants.id) as scores,
(select JSON_ARRAYAGG(url) from photos where photos.restaurant_id = restaurants.id) as photos
from restaurants where zipcode BETWEEN ${LowRange} AND ${upRange};`;
    dbConnection.query(querStry, function (err, results) {
      if (err) {
        console.log(err);
      } else {
        callback(err, results);
      }
    });
  },
};
