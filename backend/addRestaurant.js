require("dotenv").config();
const mongoose = require("mongoose");
const placesSchema = require("./schema/placesSchema");
const { model } = mongoose;

// Create model from schema
const places = model("Places", placesSchema.placesSchema);

// Connect to DB
const uri = process.env.MONGO_URL;
mongoose.connect(uri);
// mongoose.connect("mongodb://localhost:27017/your_db_name", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

const addRestaurant = async () => {
  const goaPlaces = [
  {
    name: "Baga Beach",
    address: "Baga Beach, Bardez, Goa 403516",
    price: "Free (Water sports extra)",
    city: "Goa",
    timings: "Open 24 hours",
    location: {
      type: "Point",
      coordinates: [73.7411, 15.5560]
    }
  },
  {
    name: "Basilica of Bom Jesus",
    address: "Old Goa Rd, Bainguinim, Goa 403402",
    price: "Free",
    city: "Goa",
    timings: "9:00 AM – 6:30 PM",
    location: {
      type: "Point",
      coordinates: [73.9080, 15.5009]
    }
  },
  {
    name: "Aguada Fort",
    address: "Fort Aguada Rd, Aguada Fort Area, Candolim, Goa 403515",
    price: "Free",
    city: "Goa",
    timings: "9:30 AM – 6:00 PM",
    location: {
      type: "Point",
      coordinates: [73.7697, 15.4989]
    }
  },
  {
    name: "Chapora Fort",
    address: "Chapora Fort Rd, Vagator, Goa 403509",
    price: "Free",
    city: "Goa",
    timings: "9:00 AM – 5:30 PM",
    location: {
      type: "Point",
      coordinates: [73.7364, 15.6010]
    }
  },
  {
    name: "Dudhsagar Falls",
    address: "Sonaulim, Goa 403410",
    price: "Entry + Jeep safari ~₹400",
    city: "Goa",
    timings: "6:00 AM – 5:00 PM",
    location: {
      type: "Point",
      coordinates: [74.3142, 15.3146]
    }
  },
  {
    name: "Anjuna Beach",
    address: "Anjuna, Goa 403509",
    price: "Free",
    city: "Goa",
    timings: "Open 24 hours",
    location: {
      type: "Point",
      coordinates: [73.7402, 15.5748]
    }
  },
  {
    name: "Se Cathedral",
    address: "Velha, Goa 403402",
    price: "Free",
    city: "Goa",
    timings: "7:30 AM – 6:00 PM",
    location: {
      type: "Point",
      coordinates: [73.9090, 15.5036]
    }
  },
  {
    name: "Colva Beach",
    address: "Colva, Goa 403708",
    price: "Free",
    city: "Goa",
    timings: "Open 24 hours",
    location: {
      type: "Point",
      coordinates: [73.9225, 15.2783]
    }
  },
  {
    name: "Reis Magos Fort",
    address: "Verem, Bardez, Goa 403114",
    price: "₹50 entry",
    city: "Goa",
    timings: "9:30 AM – 5:00 PM",
    location: {
      type: "Point",
      coordinates: [73.8120, 15.4991]
    }
  },
  {
    name: "Fontainhas (Latin Quarter)",
    address: "Panaji, Goa 403001",
    price: "Free",
    city: "Goa",
    timings: "Best visited during daytime",
    location: {
      type: "Point",
      coordinates: [73.8324, 15.4989]
    }
  }
];

  try {
    const saved = await places.insertMany(goaPlaces);
    console.log("hotels added:", saved);
  } catch (err) {
    console.error("Error:", err);
  } finally {
    mongoose.disconnect();
  }
};

addRestaurant();
