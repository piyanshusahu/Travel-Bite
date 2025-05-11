const { Schema } = require("mongoose");

const dormitorySchema = new Schema({
  name: String,
  price: [
    {
      amount: Number,
      occupancy: Number
    }
  ],
  address: String,
  contact: Number,
  star: Number,
  rating: Number,
  reviews: String,
  city: String,
  amenities: [String],
  image: [],
});

module.exports = { dormitorySchema };