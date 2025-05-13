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
const Dormitory=require("./models/Dormitory")
const { streetFoodModel } = require("./models/streetFoodModel");
const nodemailer = require("nodemailer");

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());
app.use("/", authRoute);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

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
      window.location.href="/";
  } catch (error) {
      console.error(error);
      res.status(400).json({ message: "Invalid or expired token" });
  }
});


app.get("/getHotels", async (req, res) => {
  const hotels = await Hotel.find();
  res.json(hotels);
});

app.get("/getHostels", async (req, res) => {
  const hostels = await Hostel.find();
  res.json(hostels);
});

// app.get("/getDorms", async (req, res) => {
//   const dorm = await Dorm.find();
//   res.json(dorm);
// });

