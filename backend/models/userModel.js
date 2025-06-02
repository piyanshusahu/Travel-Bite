const { model } = require("mongoose");

const {userSchema}=require("../schema/userSchema");

const userModel=new model("user",userSchema);

module.exports={userModel};
