const { Schema } = require("mongoose");

const placesSchema = new Schema({
  name: String,
  address: String,
  contact: Number,
  reviews: String,
});

module.exports = { placesSchema };
