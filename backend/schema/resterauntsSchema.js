const { Schema } = require("mongoose");

const resterauntSchema = new Schema({
  name: String,
  address: String,
  contact: Number,
  rating: Number,
  reviews: String,
});

module.exports = { resterauntSchema };
