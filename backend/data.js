require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");
const authRoute = require("./Routes/AuthRoute");
const { resterauntsModel } = require("./models/resterauntsModel.js");

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


// Data
let rest=[
  {
    name: "6 Ballygunge Place",
    address: "Ballygunge",
    city: "Kolkata",
    contact: "+91 3340166666",
    special: "Authentic Bengali thali",
    type: "non veg",
    rating: 4.5,
    reviews: 2100,
    coordinates: { lat: 22.5269, lng: 88.3633 },
    images: ["https://example.com/6ballygunge.jpg"],
    price_range: "₹400 - ₹1000"
  },
  {
    name: "Bhojohori Manna",
    address: "Elgin Road",
    city: "Kolkata",
    contact: "+91 3340048844",
    special: "Prawn malaikari",
    type: "non veg",
    rating: 4.4,
    reviews: 1800,
    coordinates: { lat: 22.5320, lng: 88.3554 },
    images: ["https://example.com/bhojohori.jpg"],
    price_range: "₹300 - ₹800"
  },
  {
    name: "Kewpie’s",
    address: "Elgin Lane",
    city: "Kolkata",
    contact: "+91 3347521194",
    special: "Home-style Bengali food",
    type: "non veg",
    rating: 4.2,
    reviews: 1200,
    coordinates: { lat: 22.5282, lng: 88.3525 },
    images: ["https://example.com/kewpies.jpg"],
    price_range: "₹300 - ₹900"
  },
  {
    name: "Tamarind",
    address: "Deshapriya Park",
    city: "Kolkata",
    contact: "+91 3340333244",
    special: "South Indian non-veg",
    type: "non veg",
    rating: 4.3,
    reviews: 1100,
    coordinates: { lat: 22.5189, lng: 88.3521 },
    images: ["https://example.com/tamarind.jpg"],
    price_range: "₹500 - ₹1000"
  },
  {
    name: "Govinda's",
    address: "ISKCON, Albert Road",
    city: "Kolkata",
    contact: "+91 3340332641",
    special: "Satvik thali",
    type: "jain",
    rating: 4.4,
    reviews: 1000,
    coordinates: { lat: 22.5460, lng: 88.3529 },
    images: ["https://example.com/govindas.jpg"],
    price_range: "₹200 - ₹600"
  },
  {
    name: "Suruchi",
    address: "Elliot Road",
    city: "Kolkata",
    contact: "+91 3342212145",
    special: "Bengali vegetarian",
    type: "veg",
    rating: 4.2,
    reviews: 900,
    coordinates: { lat: 22.5574, lng: 88.3602 },
    images: ["https://example.com/suruchi.jpg"],
    price_range: "₹200 - ₹500"
  },
  {
    name: "Oudh 1590",
    address: "Deshapriya Park",
    city: "Kolkata",
    contact: "+91 3340000033",
    special: "Awadhi biryani",
    type: "non veg",
    rating: 4.5,
    reviews: 1700,
    coordinates: { lat: 22.5186, lng: 88.3528 },
    images: ["https://example.com/oudh.jpg"],
    price_range: "₹400 - ₹1200"
  },
  {
    name: "Rajdhani Thali",
    address: "South City Mall",
    city: "Kolkata",
    contact: "+91 3340089898",
    special: "Rajasthani-Gujarati thali",
    type: "jain",
    rating: 4.3,
    reviews: 1300,
    coordinates: { lat: 22.5018, lng: 88.3617 },
    images: ["https://example.com/rajdhanikolkata.jpg"],
    price_range: "₹400 - ₹800"
  },
  {
    name: "Banana Leaf",
    address: "Lake Market",
    city: "Kolkata",
    contact: "+91 3342219023",
    special: "Authentic South Indian",
    type: "pure veg",
    rating: 4.1,
    reviews: 1400,
    coordinates: { lat: 22.5163, lng: 88.3459 },
    images: ["https://example.com/bananaleaf.jpg"],
    price_range: "₹200 - ₹500"
  },
  {
    name: "Haldiram's",
    address: "Park Street",
    city: "Kolkata",
    contact: "+91 3342222626",
    special: "Chaat & thali",
    type: "pure veg",
    rating: 4.2,
    reviews: 2200,
    coordinates: { lat: 22.5522, lng: 88.3540 },
    images: ["https://example.com/haldirams.jpg"],
    price_range: "₹150 - ₹400"
  }
]


// Connect DB and Start Server
app.listen(PORT, async () => {
  console.log(`✅ App is listening on port ${PORT}`);

  try {
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("✅ MongoDB connected");
    await await resterauntsModel.insertMany(rest);
    console.log("Data inserted!")
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
  }
});
