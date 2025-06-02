require("dotenv").config();
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { MongoClient } = require('mongodb');
const uri = process.env.MONGO_URL;

let client;

async function connectionClient(){
  if(!client){
    client = new MongoClient(uri);
    await client.connect();
  }
}

module.exports.Signup = async (req, res, next) => {
  const { firstName, lastName, gender, userName, email, phone, password, isRemember } = req.body;
  try {
    await connectionClient();
    const db = client.db("credentials");
    const collection = db.collection("users");
    
    const existingUser = await collection.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = {
      firstName,
      lastName,
      gender,
      userName,
      email,
      phone,
      password: hashedPassword,
      isRemember};
    
    const result = await collection.insertOne(user);

    const token = jwt.sign({id: result.insertId},process.env.JWT_SECRET_KEY,{expiresIn:"1h"});

    res.json({token, userID: result.insertId});
    // res
    //   .status(201)
    //   .json({ message: "User signed in successfully", success: true, user });
    // next();
  }

  catch (error) {
    console.error("error during signup", error.message);
  }
};

module.exports.Login = async (req, res, next) => {
  const { email, password } = req.body;
    try {
      await connectionClient();
      const db = client.db("credentials");
      const collection = db.collection("users");
      
      const existingUser = await collection.findOne({ email });
      if (!existingUser) {
        return res.status(400).json({ message: "invalid credentials email" });
      }

      const isMatch = await bcrypt.compare(password, existingUser.password);

      if(!isMatch){
        return res.status(400).json({ message: "invalid credentials password" });
      }
      
      const token = jwt.sign({id: existingUser._id}, process.env.JWT_SECRET_KEY, {expiresIn: "1h"});
      res.json({token, userID: existingUser._id});

    } catch (error) {
      console.error("error during login: ",error);
      res.status(500).send("server error");
    };

  };