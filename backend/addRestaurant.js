require("dotenv").config();
const mongoose = require("mongoose");
const hotelsSchema = require("./schema/hotelsSchema");
const { model } = mongoose;

// Create model from schema
const hotels = model("Hotels", hotelsSchema.hotelsSchema);

// Connect to DB
const uri = process.env.MONGO_URL;
mongoose.connect(uri);
// mongoose.connect("mongodb://localhost:27017/your_db_name", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

const addRestaurant = async () => {
  const restaurantData = [
  {
    name: "Paradise Restaurant",
    address: "Silpukhuri, MG Road, Guwahati",
    city: "Guwahati",
    contact: 9867543210,
    special: "Assamese Thali",
    type: "non-veg",
    rating: 4.4,
    reviews: "Authentic Assamese cuisine at a fair price.",
    images: [
      "https://example.com/paradise-guwahati.jpg"
    ],
    pin_code: 781003
  },
  {
    name: "Michinga - The Indo Fusion Cafe",
    address: "Six Mile, Panjabari Road, Guwahati",
    city: "Guwahati",
    contact: 9876509876,
    special: "Fusion Pizza and Mocktails",
    type: "both",
    rating: 4.3,
    reviews: "Trendy hangout with a creative menu.",
    images: [
      "https://example.com/michinga.jpg"
    ],
    pin_code: 781022
  },
  {
    name: "The Woking Mama",
    address: "Zoo Road, Guwahati",
    city: "Guwahati",
    contact: 9833301234,
    special: "Pan-Asian Noodles and Dumplings",
    type: "non-veg",
    rating: 4.5,
    reviews: "A go-to for Pan-Asian lovers with a cozy vibe.",
    images: [
      "https://example.com/woking.jpg"
    ],
    pin_code: 781024
  },
  {
    name: "JB’s Restaurant",
    address: "Paltan Bazaar, Guwahati",
    city: "Guwahati",
    contact: 9123456789,
    special: "Veg Thali & North Indian Dishes",
    type: "veg",
    rating: 4.2,
    reviews: "Pure veg family restaurant with fast service.",
    images: [
      "https://example.com/jbs.jpg"
    ],
    pin_code: 781008
  },
  {
    name: "Gam's Delicacy",
    address: "Ganeshguri, Guwahati",
    city: "Guwahati",
    contact: 9777700000,
    special: "Pork with Bamboo Shoot & Rice",
    type: "non-veg",
    rating: 4.6,
    reviews: "Authentic tribal food experience with great service.",
    images: [
      "https://example.com/gams.jpg"
    ],
    pin_code: 781006
  },
  {
    name: "Kalita Café",
    address: "Kahilipara, Guwahati",
    city: "Guwahati",
    contact: 9000099990,
    special: "Bamboo Rice and Veg Curry",
    type: "veg",
    rating: 4.1,
    reviews: "Simple Assamese food with homemade taste.",
    images: [
      "https://example.com/kalita.jpg"
    ],
    pin_code: 781019
  }
];

  try {
    const saved = await Restaurant.insertMany(restaurantData);
    console.log("Restaurant added:", saved);
  } catch (err) {
    console.error("Error:", err);
  } finally {
    mongoose.disconnect();
  }
};

addRestaurant();
