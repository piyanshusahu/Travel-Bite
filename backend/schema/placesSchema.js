const { Schema } = require("mongoose");

const placesSchema = new Schema({
  name: String,
  address: String,
  price:String,
  city:String,
  timings:String,
  location: {
    type: {
      type: String,
      enum: ['Point'],
      required: true,
      default: 'Point'
    },
    coordinates: {
      type: [Number], // [longitude, latitude]
      required: true
    }
  }
});

module.exports = { placesSchema };
