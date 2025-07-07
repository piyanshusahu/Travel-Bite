const { model } = require("mongoose");

const {resterauntsSchema}=require("../schema/resterauntsSchema");

const resterauntsModel = model("Restaurant", resterauntsSchema);
module.exports = { resterauntsModel };
