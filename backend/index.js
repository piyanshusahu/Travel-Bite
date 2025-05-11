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
const {hotelModel} = require("./models/hotelsModel");
const { hostelModel } = require("./models/hostelsModel");
const { dormitoryModel } = require("./models/dormitoryModel");
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


app.get("/add", async (req, res) => {
  try {
    console.log("Hotel Model inside /add:", dormitoryModel);  // 🔍 Debugging Log
    if (!dormitoryModel) {
      return res.status(500).send("Hotel model is not defined");
    }
    const result = await dormitoryModel.deleteMany({ city: "hyderabad" });

    console.log(`${result.deletedCount} hotels deleted from hyderabad.`);
    // const dorm =[
    //   {
    //     "name": "Zostel Ahmedabad",
    //     "price": [
    //       { "amount": 450, "occupancy": 1 },
    //       { "amount": 800, "occupancy": 2 }
    //     ],
    //     "address": "6, Brahmin Mitra Mandal Society, Near Law Garden, Ellisbridge, Ahmedabad",
    //     "contact": null,
    //     "star": null,
    //     "rating": 4.4,
    //     "reviews": "A popular chain hostel known for its social atmosphere and good location near Law Garden.",
    //     "city": "Ahmedabad",
    //     "amenities": ["Free Wi-Fi", "Common Lounge", "Guest Kitchen", "Rooftop Terrace"],
    //     "image": []
    //   },
    //   {
    //     "name": "goSTOPS Ahmedabad",
    //     "price": [
    //       { "amount": 400, "occupancy": 1 },
    //       { "amount": 700, "occupancy": 2 }
    //     ],
    //     "address": "3rd Floor, 306, Galaxy Avenue, Near Shivranjani Cross Road, Satellite, Ahmedabad",
    //     "contact": null,
    //     "star": null,
    //     "rating": 4.3,
    //     "reviews": "Offers a comfortable stay in the Satellite area, known for its connectivity.",
    //     "city": "Ahmedabad",
    //     "amenities": ["Free Wi-Fi", "Common Kitchen", "Games Room", "Travel Desk"],
    //     "image": []
    //   },
    //   {
    //     "name": "OYO Flagship various locations (search for budget options)",
    //     "price": [
    //       { "amount": 250, "occupancy": 1 },
    //       { "amount": 450, "occupancy": 2 }
    //     ],
    //     "address": "Multiple locations (search for OYO Flagship with lower prices)",
    //     "contact": null,
    //     "star": 3,
    //     "rating": 3.5,
    //     "reviews": "OYO properties often have very budget-friendly private rooms that can be an economical alternative to dorms.",
    //     "city": "Ahmedabad",
    //     "amenities": ["AC", "TV", "Attached Bathroom"],
    //     "image": []
    //   },
    //   {
    //     "name": "Hotel комфорт (search for budget hotels near Kalupur Railway Station)",
    //     "price": [
    //       { "amount": 200, "occupancy": 1 },
    //       { "amount": 350, "occupancy": 2 }
    //     ],
    //     "address": "Various locations near Kalupur Railway Station (requires specific online search)",
    //     "contact": null,
    //     "star": null,
    //     "rating": null,
    //     "reviews": "Areas around railway stations often have budget hotels catering to travelers.",
    //     "city": "Ahmedabad",
    //     "amenities": ["Likely basic"],
    //     "image": []
    //   },
    //   {
    //     "name": "Budget Guesthouses in the Old City area (search specifically)",
    //     "price": [
    //       { "amount": 220, "occupancy": 1 },
    //       { "amount": 400, "occupancy": 2 }
    //     ],
    //     "address": "Old City, Ahmedabad (requires specific online search)",
    //     "contact": null,
    //     "star": null,
    //     "rating": null,
    //     "reviews": "The Old City might have some very budget-friendly guesthouses.",
    //     "city": "Ahmedabad",
    //     "amenities": ["Likely basic"],
    //     "image": []
    //   },
    //   {
    //     "name": "Check for 'PG Accommodation' near universities (e.g., Gujarat University)",
    //     "price": [
    //       { "amount": 150, "occupancy": 1 },
    //       { "amount": 250, "occupancy": 2 }
    //     ],
    //     "address": "Areas around Gujarat University (requires specific inquiry)",
    //     "contact": null,
    //     "star": null,
    //     "rating": null,
    //     "reviews": "Might offer short-term stays, though primarily for students.",
    //     "city": "Ahmedabad",
    //     "amenities": ["Varies, often basic shared facilities"],
    //     "image": []
    //   },
    //   {
    //     "name": "Hotelを探す (search for budget hotels in the Ashram Road area)",
    //     "price": [
    //       { "amount": 280, "occupancy": 1 },
    //       { "amount": 480, "occupancy": 2 }
    //     ],
    //     "address": "Ashram Road, Ahmedabad (requires specific online search)",
    //     "contact": null,
    //     "star": null,
    //     "rating": null,
    //     "reviews": "Ashram Road is a central area with various hotel options, including some budget ones.",
    //     "city": "Ahmedabad",
    //     "amenities": ["Likely basic"],
    //     "image": []
    //   },
    //   {
    //     "name": "Look for smaller hotels near the Ahmedabad Junction railway station",
    //     "price": [
    //       { "amount": 180, "occupancy": 1 },
    //       { "amount": 300, "occupancy": 2 }
    //     ],
    //     "address": "Near Ahmedabad Junction Railway Station (requires specific search)",
    //     "contact": null,
    //     "star": null,
    //     "rating": null,
    //     "reviews": "Similar to Kalupur, this area might have budget options for travelers.",
    //     "city": "Ahmedabad",
    //     "amenities": ["Likely basic"],
    //     "image": []
    //   },
    //   {
    //     "name": "Budget Guesthouses in the Navrangpura area (search specifically)",
    //     "price": [
    //       { "amount": 240, "occupancy": 1 },
    //       { "amount": 420, "occupancy": 2 }
    //     ],
    //     "address": "Navrangpura, Ahmedabad (requires specific online search)",
    //     "contact": null,
    //     "star": null,
    //     "rating": null,
    //     "reviews": "Navrangpura is a well-known area with a mix of commercial and residential spaces, potentially offering budget stays.",
    //     "city": "Ahmedabad",
    //     "amenities": ["Likely basic"],
    //     "image": []
    //   },
    //   {
    //     "name": "是谁的旅馆 (search for budget guesthouses in less central areas)",
    //     "price": [
    //       { "amount": 160, "occupancy": 1 },
    //       { "amount": 280, "occupancy": 2 }
    //     ],
    //     "address": "Areas slightly outside the central hubs (requires specific online search)",
    //     "contact": null,
    //     "star": null,
    //     "rating": null,
    //     "reviews": "Exploring areas a bit further from the main tourist or commercial zones might yield more budget-friendly finds.",
    //     "city": "Ahmedabad",
    //     "amenities": ["Varies"],
    //     "image": []
    //   }
    // ];
    // await dormitoryModel.insertMany(dorm);
    // res.send("Hotels added successfully!");
  } catch (error) {
    console.error("Error adding hotels:", error);
    res.status(500).send("Error inserting hotels.");
  }
});
