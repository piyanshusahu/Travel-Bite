const { Schema } = require("mongoose");

const hotelsSchema = new Schema({
  name: String,
  price: Number,
  address: String,
  contact: Number,
  rating: Number,
  reviews: String,
  city: String,
  amenities: [String],
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

hotelsSchema.index({ location: "2dsphere" });

module.exports = { hotelsSchema };
