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
let places=[
  {
    name: "Red Fort",
    address: "Netaji Subhash Marg, Chandni Chowk, Delhi",
    price: "₹35 for Indians, ₹500 for foreigners",
    city: "Delhi",
    timings: "9:30 AM - 4:30 PM (Closed Monday)",
    pincode: 110006
  },
  {
    name: "Qutub Minar",
    address: "Seth Sarai, Mehrauli, Delhi",
    price: "₹30 for Indians, ₹500 for foreigners",
    city: "Delhi",
    timings: "7:00 AM - 5:00 PM",
    pincode: 110030
  },
  {
    name: "India Gate",
    address: "Rajpath, India Gate, New Delhi",
    price: "Free",
    city: "Delhi",
    timings: "24 hours",
    pincode: 110001
  },
  {
    name: "Humayun’s Tomb",
    address: "Mathura Road, Nizamuddin East, Delhi",
    price: "₹35 for Indians, ₹550 for foreigners",
    city: "Delhi",
    timings: "6:00 AM - 6:00 PM",
    pincode: 110013
  },
  {
    name: "Lotus Temple",
    address: "Bahapur, Kalkaji, Delhi",
    price: "Free",
    city: "Delhi",
    timings: "9:00 AM - 5:00 PM (Closed Monday)",
    pincode: 110019
  },
  {
    name: "Akshardham Temple",
    address: "NH 24, Akshardham Setu, Delhi",
    price: "Free (exhibitions charge extra)",
    city: "Delhi",
    timings: "9:30 AM - 8:00 PM (Closed Monday)",
    pincode: 110092
  },
  {
    name: "Jama Masjid",
    address: "Chandni Chowk, Delhi",
    price: "Free (₹300 for photography)",
    city: "Delhi",
    timings: "7:00 AM - 12:00 PM, 1:30 PM - 6:30 PM",
    pincode: 110006
  },
  {
    name: "Hauz Khas Village",
    address: "Hauz Khas, South Delhi",
    price: "Free",
    city: "Delhi",
    timings: "10:30 AM - 7:00 PM",
    pincode: 110016
  },
  {
    name: "Raj Ghat",
    address: "Mahatma Gandhi Marg, Delhi",
    price: "Free",
    city: "Delhi",
    timings: "6:00 AM - 6:00 PM",
    pincode: 110002
  },
  {
    name: "National Museum",
    address: "Janpath Road, Rajpath, Delhi",
    price: "₹20 for Indians, ₹650 for foreigners",
    city: "Delhi",
    timings: "10:00 AM - 6:00 PM (Closed Monday)",
    pincode: 110011
  },
  {
    name: "Marina Beach",
    address: "Marina Beach Road, Chennai",
    price: "Free",
    city: "Chennai",
    timings: "24 hours",
    pincode: 600005
  },
  {
    name: "Kapaleeshwarar Temple",
    address: "Mylapore, Chennai",
    price: "Free",
    city: "Chennai",
    timings: "5:00 AM - 12:00 PM, 4:00 PM - 9:00 PM",
    pincode: 600004
  },
  {
    name: "Fort St. George",
    address: "Rajaji Salai, Chennai",
    price: "₹15 for Indians, ₹200 for foreigners",
    city: "Chennai",
    timings: "9:00 AM - 5:00 PM (Closed Friday)",
    pincode: 600009
  },
  {
    name: "San Thome Basilica",
    address: "Santhome High Rd, Mylapore, Chennai",
    price: "Free",
    city: "Chennai",
    timings: "6:00 AM - 8:00 PM",
    pincode: 600004
  },
  {
    name: "Arignar Anna Zoological Park",
    address: "Vandalur, Chennai",
    price: "₹50 for adults",
    city: "Chennai",
    timings: "9:00 AM - 5:00 PM (Closed Tuesday)",
    pincode: 600048
  },
  {
    name: "Guindy National Park",
    address: "Rangeguindy, Chennai",
    price: "₹20 for adults",
    city: "Chennai",
    timings: "9:00 AM - 5:30 PM (Closed Tuesday)",
    pincode: 600025
  },
  {
    name: "Elliot's Beach",
    address: "Besant Nagar, Chennai",
    price: "Free",
    city: "Chennai",
    timings: "24 hours",
    pincode: 600090
  },
  {
    name: "Government Museum",
    address: "Pantheon Road, Egmore, Chennai",
    price: "₹15 for Indians, ₹250 for foreigners",
    city: "Chennai",
    timings: "9:30 AM - 5:00 PM (Closed Friday)",
    pincode: 600008
  },
  {
    name: "Valluvar Kottam",
    address: "Nungambakkam High Road, Chennai",
    price: "₹5 for Indians",
    city: "Chennai",
    timings: "8:00 AM - 5:30 PM",
    pincode: 600034
  },
  {
    name: "DakshinaChitra",
    address: "East Coast Road, Muttukadu, Chennai",
    price: "₹130 for adults",
    city: "Chennai",
    timings: "10:00 AM - 6:00 PM (Closed Tuesday)",
    pincode: 603112
  },
  {
    name: "Lalbagh Botanical Garden",
    address: "Lalbagh, Mavalli, Bengaluru",
    price: "₹25 for adults",
    city: "Bangalore",
    timings: "6:00 AM - 7:00 PM",
    pincode: 560004
  },
  {
    name: "Cubbon Park",
    address: "Kasturba Road, Bengaluru",
    price: "Free",
    city: "Bangalore",
    timings: "6:00 AM - 6:00 PM",
    pincode: 560001
  },
  {
    name: "Bangalore Palace",
    address: "Vasanth Nagar, Bengaluru",
    price: "₹230 for Indians",
    city: "Bangalore",
    timings: "10:00 AM - 5:30 PM",
    pincode: 560052
  },
  {
    name: "ISKCON Temple",
    address: "Hare Krishna Hill, Rajajinagar, Bengaluru",
    price: "Free",
    city: "Bangalore",
    timings: "4:30 AM - 8:30 PM",
    pincode: 560010
  },
  {
    name: "Bannerghatta Biological Park",
    address: "Bannerghatta, Bengaluru",
    price: "₹80 for zoo entry",
    city: "Bangalore",
    timings: "9:30 AM - 5:00 PM (Closed Tuesday)",
    pincode: 560083
  },
  {
    name: "Tipu Sultan’s Summer Palace",
    address: "Albert Victor Road, Bengaluru",
    price: "₹15 for Indians",
    city: "Bangalore",
    timings: "8:30 AM - 5:30 PM",
    pincode: 560002
  },
  {
    name: "Ulsoor Lake",
    address: "Ulsoor, Bengaluru",
    price: "Free",
    city: "Bangalore",
    timings: "6:00 AM - 8:00 PM",
    pincode: 560008
  },
  {
    name: "Nandi Hills",
    address: "Chikkaballapur, near Bangalore",
    price: "₹10 for entry",
    city: "Bangalore",
    timings: "6:00 AM - 6:00 PM",
    pincode: 562101
  },
  {
    name: "Wonderla",
    address: "Mysore Road, Bengaluru",
    price: "₹999 onwards",
    city: "Bangalore",
    timings: "11:00 AM - 6:00 PM",
    pincode: 562109
  },
  {
    name: "Vidhana Soudha",
    address: "Dr Ambedkar Road, Bengaluru",
    price: "Free (exterior view only)",
    city: "Bangalore",
    timings: "24 hours (outside view)",
    pincode: 560001
  },
  {
    name: "Charminar",
    address: "Char Kaman, Ghansi Bazaar, Hyderabad",
    price: "₹20 for Indians",
    city: "Hyderabad",
    timings: "9:30 AM - 5:30 PM",
    pincode: 500002
  },
  {
    name: "Golconda Fort",
    address: "Ibrahim Bagh, Hyderabad",
    price: "₹25 for Indians, ₹300 for foreigners",
    city: "Hyderabad",
    timings: "9:00 AM - 5:30 PM",
    pincode: 500008
  },
  {
    name: "Hussain Sagar Lake",
    address: "Tank Bund Road, Hyderabad",
    price: "Free (boating extra)",
    city: "Hyderabad",
    timings: "8:00 AM - 10:00 PM",
    pincode: 500003
  },
  {
    name: "Ramoji Film City",
    address: "Anaspur, Hayathnagar, Hyderabad",
    price: "₹1150 for adults",
    city: "Hyderabad",
    timings: "9:00 AM - 5:30 PM",
    pincode: 501512
  },
  {
    name: "Salar Jung Museum",
    address: "Darulshifa, Hyderabad",
    price: "₹20 for Indians, ₹500 for foreigners",
    city: "Hyderabad",
    timings: "10:00 AM - 5:00 PM (Closed Friday)",
    pincode: 500002
  },
  {
    name: "Birla Mandir",
    address: "Hill Fort Road, Naubat Pahad, Hyderabad",
    price: "Free",
    city: "Hyderabad",
    timings: "7:00 AM - 12:00 PM, 3:00 PM - 9:00 PM",
    pincode: 500004
  },
  {
    name: "Chowmahalla Palace",
    address: "Khilwat, Hyderabad",
    price: "₹80 for Indians",
    city: "Hyderabad",
    timings: "10:00 AM - 5:00 PM (Closed Friday)",
    pincode: 500002
  },
  {
    name: "Nehru Zoological Park",
    address: "Bahadurpura, Hyderabad",
    price: "₹50 for adults",
    city: "Hyderabad",
    timings: "8:00 AM - 5:00 PM (Closed Monday)",
    pincode: 500064
  },
  {
    name: "Lumbini Park",
    address: "Tank Bund Road, Hyderabad",
    price: "₹20 for entry",
    city: "Hyderabad",
    timings: "9:00 AM - 9:00 PM",
    pincode: 500063
  },
  {
    name: "Shilparamam",
    address: "Hi-Tech City, Hyderabad",
    price: "₹60 for adults",
    city: "Hyderabad",
    timings: "10:30 AM - 8:00 PM",
    pincode: 500081
  },
  {
    name: "Gateway of India",
    address: "Apollo Bandar, Colaba, Mumbai",
    price: "Free",
    city: "Mumbai",
    timings: "24 hours",
    pincode: 400001
  },
  {
    name: "Chhatrapati Shivaji Maharaj Vastu Sangrahalaya",
    address: "159-161, Mahatma Gandhi Road, Fort, Mumbai",
    price: "₹85 for Indians, ₹500 for foreigners",
    city: "Mumbai",
    timings: "10:15 AM - 6:00 PM",
    pincode: 400032
  },
  {
    name: "Marine Drive",
    address: "Marine Drive, Netaji Subhash Chandra Bose Road, Mumbai",
    price: "Free",
    city: "Mumbai",
    timings: "24 hours",
    pincode: 400020
  },
  {
    name: "Siddhivinayak Temple",
    address: "Prabhadevi, Mumbai",
    price: "Free",
    city: "Mumbai",
    timings: "5:30 AM - 9:50 PM",
    pincode: 400028
  },
  {
    name: "Elephanta Caves",
    address: "Elephanta Island, Mumbai Harbour",
    price: "₹40 for Indians, ₹600 for foreigners",
    city: "Mumbai",
    timings: "9:00 AM - 5:30 PM",
    pincode: 400094
  },
  {
    name: "Haji Ali Dargah",
    address: "Dargah Rd, Haji Ali, Mumbai",
    price: "Free",
    city: "Mumbai",
    timings: "5:30 AM - 10:00 PM",
    pincode: 400026
  },
  {
    name: "Juhu Beach",
    address: "Juhu, Mumbai",
    price: "Free",
    city: "Mumbai",
    timings: "24 hours",
    pincode: 400049
  },
  {
    name: "Chor Bazaar",
    address: "Mutton Street, Kamathipura, Mumbai",
    price: "Depends on purchase",
    city: "Mumbai",
    timings: "11:00 AM - 7:30 PM (Closed Friday)",
    pincode: 400008
  },
  {
    name: "Global Vipassana Pagoda",
    address: "Next to Esselworld, Gorai, Mumbai",
    price: "Free (donation-based)",
    city: "Mumbai",
    timings: "9:00 AM - 7:00 PM",
    pincode: 400091
  },
  {
    name: "Nehru Planetarium",
    address: "Dr. Annie Besant Road, Worli, Mumbai",
    price: "₹100 per show",
    city: "Mumbai",
    timings: "11:00 AM - 5:00 PM",
    pincode: 400018
  }
]


  

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
