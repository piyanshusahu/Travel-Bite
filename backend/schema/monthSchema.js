const { Schema } = require("mongoose");

const monthSchema = new Schema({
  name: String,
  address: String,
  rating: Number,
  reviews: String,
  month: String,
  images: [],
});

module.exports = { monthSchema };