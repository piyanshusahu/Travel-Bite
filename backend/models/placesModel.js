const { model } = require("mongoose");

const {placesSchema}=require("../schema/placesSchema");

const placesModel=new model("places",placesSchema);

module.exports=placesModel;
