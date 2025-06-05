const { Schema } = require("mongoose");

const placesSchema = new Schema({
  name: String,
  address: String,
  price:String,
  city:String,
  timings:String
});

module.exports = { placesSchema };
