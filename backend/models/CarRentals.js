const mongoose = require("mongoose");

const carRentalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  contact:{
    type:Number,
    required:true
  },
  price:{
    type:[Number],
    required:true
  },
  type:{
    type:[String],
    required:true
  },
  city:{
    type:String,
    required:true
  },
  availability:{
    type:Boolean,
  },
  rating:{
    type:Number,
    required:true
  },
  cars:{
    type:[String],
    required:true
  },
  image:{
    type:String,
    required:true
  },
  ammenities:{
    type:[String],
    required:true
  },
  terms:{
    type:[String],
    required:true
  }
});

const carrental = mongoose.model("carrental", carRentalSchema);

module.exports = carrental;
