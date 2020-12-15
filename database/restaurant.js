const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const restaurantSchema = new mongoose.Schema({
  name: String,
  address: String,
  phone: Number,
  ratings: Array,
  price: Array,
});

const reviewSchema = new mongoose.Schema({
  title: String,
  body: String,
  rating: Number,
  price: Number,
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);
const Review = mongoose.model('Review', reviewSchema);
