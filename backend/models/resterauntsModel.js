const { model } = require("mongoose");

const {resterauntsSchema}=require("../schema/resterauntsSchema");

const resterauntsModel=new model("resteraunt",resterauntsSchema);

module.exports={resterauntsModel};
