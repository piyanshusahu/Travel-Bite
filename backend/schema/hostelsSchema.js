const { Schema } = require("mongoose");

const hostelsSchema = new Schema({
  name: String,
  price: Number,
  address: String,
  contact: Number,
  rating: Number,
  reviews: String,
  city: String,
  amenities: [String]
});

module.exports = { hostelsSchema };