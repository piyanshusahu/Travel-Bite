const { Schema } = require("mongoose");

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  gender: String,
  userName: String,
  email: String,
  phone: Number,
  password: String,
  isRemember: Boolean,
});

module.exports = { userSchema };