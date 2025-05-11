const { model } = require("mongoose");

const {hostelsSchema}=require("../schema/hostelsSchema");

const hostelModel=new model("hostels",hostelsSchema);

module.exports={hostelModel};