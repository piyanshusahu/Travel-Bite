const mongoose = require("mongoose");

const dormSchema = new mongoose.Schema({
    name: String,
    address: String,
    contact: Number,
    price: [Number],
    rating: Number,        
    star: Number,
    reviews: String,
    city: String,
    amenities: [String],
    image: [String],
});

const Dormitory = mongoose.model("Dormitory", dormSchema);

module.exports = Dormitory;