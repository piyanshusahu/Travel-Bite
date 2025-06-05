require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");
const authRoute = require("./Routes/AuthRoute");

const app = express();
const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());
app.use("/", authRoute);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Model
const Place = require("./models/placesModel");

// Data

  

// Connect DB and Start Server
app.listen(PORT, async () => {
  console.log(`✅ App is listening on port ${PORT}`);

  try {
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("✅ MongoDB connected");

    const count = await Place.countDocuments();
    if (count === 0) {
      await Place.insertMany(places);
      console.log("✅ Places inserted into DB");
    } else {
      console.log("ℹ️ Places already exist in DB");
    }

  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
  }
});
