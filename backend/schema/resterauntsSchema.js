const { Schema } = require("mongoose");

const resterauntsSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  contact: { type: String, required: true },
  special: { type: String }, // Special dish or feature
  type: { 
    type: String, 
    enum: ["pure veg", "veg", "jain", "non veg"], 
    required: true 
  },
  rating: { type: Number, min: 0, max: 5 },
  reviews: { type: Number, default: 0 },
  coordinates: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true }
  },
  images: [String], // array of image URLs
  price_range: { type: String } // e.g. ₹100 - ₹400
});

module.exports = { resterauntsSchema };
