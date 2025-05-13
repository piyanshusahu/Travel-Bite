const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
  name:String,
  address:String,
  contact:Number,
  price:[Number],
  rooms:[String],
  star:Number,
  rating:Number,
  reviews:String,
  city:String,
  amenities:[String],
  image:[String]
});

const Hotel = mongoose.model("Hotel", hotelSchema);

module.exports = Hotel;