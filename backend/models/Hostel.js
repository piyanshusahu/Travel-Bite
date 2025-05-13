const mongoose = require("mongoose");

const hostelSchema = new mongoose.Schema({
    name:String,
    address:String,
    contact:Number,
    price:Number,
    rating:Number,
    reviews:String,
    city:String,
    amenities:[String],
});

const Hostel = mongoose.model("Hostel", hostelSchema);

module.exports = Hostel;