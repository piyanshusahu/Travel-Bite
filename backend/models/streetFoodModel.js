const { model } = require("mongoose");

const {streetFoodSchema}=require("../schema/streetFoodSchema");

const streetFoodModel=new model("streetFood",streetFoodSchema);

module.exports={streetFoodModel};