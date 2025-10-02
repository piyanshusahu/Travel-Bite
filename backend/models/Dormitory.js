const mongoose = require("mongoose");

const dormitorySchema = new mongoose.Schema({
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

const Dormitory = mongoose.model("Dormitory", dormitorySchema);

module.exports = Dormitory;