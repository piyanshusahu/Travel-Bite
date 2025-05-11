const { Schema } = require("mongoose");

const hotelsSchema = new Schema({
  name: String,
  address: String,
  contact: Number,
  rating: Number,
  reviews: String,
  city: String,
  amenities: [String]
});

module.exports = { hotelsSchema };
