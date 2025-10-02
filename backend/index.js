require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { userModel } = require("./models/userModel");
const cities = require("./models/City");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");
const router = express.Router();
const path = require('path');
const jwt = require("jsonwebtoken");
const Hotel = require("./models/Hotel");
const Hostel=require("./models/Hostel");
const Dormitory=require("./models/Dormitory");
const carRentals=require("./models/CarRentals");
const Place=require("./models/placesModel");
const { resterauntsModel } = require("./models/resterauntsModel.js");
const axios = require("axios");

const { streetFoodModel } = require("./models/streetFoodModel");
const nodemailer = require("nodemailer");

app.use(cors({
  origin: "http://localhost:3000", // or your frontend domain
  credentials: true
}));
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());
app.use("/", authRoute);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;
// server.js or routes/api.js


app.get("/api/distance", async (req, res) => {
  const { origin, destination } = req.query;

  const headers = {
    Authorization: "YOUR_API_KEY", // Replace with real ORS key
    "Content-Type": "application/json",
  };

  const [originLng, originLat] = origin.split(",").map(Number);
  const [destLng, destLat] = destination.split(",").map(Number);

  const body = {
    locations: [[originLng, originLat], [destLng, destLat]],
    metrics: ["distance", "duration"],
  };

  try {
    const response = await axios.post(
      "https://api.openrouteservice.org/v2/matrix/driving-car",
      body,
      { headers }
    );

    const { distances, durations } = response.data;
    res.json({
      distance: distances[0][1], // in meters
      duration: durations[0][1], // in seconds
    });
  } catch (error) {
    console.error("ORS error:", error.response?.data || error.message);
    res.status(500).json({ error: "Distance fetch failed" });
  }
});

module.exports = router;



app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
    mongoose.connect(uri);
    console.log("DB connected");
});

app.post("/newUser", async (req, res) => {
  let newUser = new userModel({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    gender: req.body.gender,
    userName: req.body.userName,
    email: req.body.email,
    phone: req.body.phone,
    password: req.body.password,
    isRemember: req.body.isRemember,
  });
  newUser.save();
  console.log("Data saved!!");
});

app.get('/api/isAuthenticated', (req, res) => {
  if (req.isAuthenticated()) {
    res.status(200).json({ isAuthenticated: true, user: req.user });
  } else {
    res.status(401).json({ isAuthenticated: false });
  }
});

app.get("/getCities", async (req, res) => {
  const city = await cities.find();
  res.json(city);
});


const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
      user: process.env.EMAIL_USER, // Your email
      pass: process.env.EMAIL_PASS, // Your app password
  }
});

app.post("/forgot-password", async (req, res) => {
  const { email } = req.body;
  try {
      const user = await userModel.findOne({ email });
      if (!user) {
          return res.status(404).json({ message: "User not found" });
      }

      // Generate Token
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: "1h" });

      // Send Email
      const resetLink = `http://localhost:3000/reset-password/${token}`;
      await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: email,
          subject: "Password Reset Request",
          html: `<p>Click the link below to reset your password:</p>
                 <a href="${resetLink}">${resetLink}</a>
                 <p>This link will expire in 1 hour.</p>`,
      });

      res.json({ message: "Reset password link sent to your email" });
  } catch (error) {
      console.error("Forgot Password Error:", error); // Log full error
      res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
});

// **2️⃣ Reset Password Route**
app.post("/reset-password/:token", async (req, res) => {
  const { token } = req.params;
  const { newPassword } = req.body;

  try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
      const user = await userModel.findById(decoded.id);

      if (!user) {
          return res.status(400).json({ message: "Invalid token or user not found" });
      }

      // Hash the new password and update it in DB
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      user.password = hashedPassword;
      await user.save();

      res.json({ message: "Password successfully reset!" });
      res.redirect("/")
  } catch (error) {
      console.error(error);
      res.status(400).json({ message: "Invalid or expired token" });
  }
});



//stay API Call
app.get("/getHotels", async (req, res) => {
  const hotels = await Hotel.find();
  res.json(hotels);
});

app.get("/getHostels", async (req, res) => {
  const hostels = await Hostel.find();
  res.json(hostels);
});

app.get("/getDormitories", async (req, res) => {
  const dorm = await Dormitory.find();
  res.json(dorm);
});

//transport API Call
app.get("/getCarRentals", async (req, res) => {
  const cars = await carRentals.find();
  res.json(cars);
});


//destination API Call
app.get("/getPlaces", async (req, res) => {
  const places = await Place.find();
  res.json(places);
});

//resteraunts API Call
app.get("/getResteraunts",async(req,res)=>{
  try{
    const rest=await resterauntsModel.find();
    res.json(rest)
  }catch(e){
    console.log("Error in fetching resteraunts:",e)
  }
})

//live-events API Call



