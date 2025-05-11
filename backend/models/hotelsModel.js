const { model } = require("mongoose");

const {hotelsSchema}=require("../schema/hotelsSchema");

const hotelModel=new model("hotels",hotelsSchema);

module.exports={hotelModel};
