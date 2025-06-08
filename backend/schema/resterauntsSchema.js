const { Schema } = require("mongoose");

const resterauntSchema = new Schema({
  name: String,
  address: String,
  city: String,
  contact: Number,
  special: String,
  type: String,
  rating: Number,
  reviews: String,
  images: [],
  pin_code: Number
});

module.exports = { resterauntSchema };
