const { model } = require("mongoose");

const {dormitorySchema}=require("../schema/dormitorySchema");

const dormitoryModel=new model("dormitory",dormitorySchema);

module.exports={dormitoryModel};