const { Schema } = require("mongoose");

const streetFoodSchema = new Schema({
  name: String,
  address: String,
  contact: Number,
  reviews: String,
  city: String,
});

module.exports = { streetFoodSchema };