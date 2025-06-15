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
  const goaHotels = [
  {
    name: "Hotel Bonanza",
    price: 800,
    address: "Baga-Calangute Road, Baga, Goa 403516",
    contact: 8322279321,
    rating: 3.5,
    reviews: "Affordable stay near Baga Beach.",
    city: "Goa",
    amenities: ["WiFi", "AC", "Parking"],
    location: { type: "Point", coordinates: [73.7511, 15.5597] }
  },
  {
    name: "Hotel Brisa Marina",
    price: 1100,
    address: "Near Dona Paula Jetty, Dona Paula, Goa 403004",
    contact: 8322456789,
    rating: 3.7,
    reviews: "Sea-facing rooms at good rates.",
    city: "Goa",
    amenities: ["WiFi", "Sea View", "Breakfast"],
    location: { type: "Point", coordinates: [73.8072, 15.4614] }
  },
  {
    name: "Resorte Marinha Dourada",
    price: 1800,
    address: "Tambudki, Arpora, Goa 403518",
    contact: 8322279600,
    rating: 4.0,
    reviews: "Resort near Baga with lake view.",
    city: "Goa",
    amenities: ["WiFi", "Pool", "Gym"],
    location: { type: "Point", coordinates: [73.7669, 15.5697] }
  },
  {
    name: "Hotel Palacio de Goa",
    price: 2400,
    address: "Dr. Gama Pinto Road, Panaji, Goa 403001",
    contact: 8322227207,
    rating: 4.1,
    reviews: "Clean hotel in central Panaji.",
    city: "Goa",
    amenities: ["WiFi", "Restaurant", "Laundry"],
    location: { type: "Point", coordinates: [73.8291, 15.4952] }
  },
  {
    name: "Hotel Fidalgo",
    price: 3100,
    address: "18th June Road, Panaji, Goa 403001",
    contact: 8322226201,
    rating: 4.2,
    reviews: "Business-friendly with excellent buffet.",
    city: "Goa",
    amenities: ["WiFi", "Bar", "Spa"],
    location: { type: "Point", coordinates: [73.8275, 15.4966] }
  },
  {
    name: "La Sunila Suites",
    price: 4700,
    address: "Near Baga Creek, Arpora, Goa 403516",
    contact: 8322264444,
    rating: 4.3,
    reviews: "Spacious suites close to nightlife.",
    city: "Goa",
    amenities: ["WiFi", "Gym", "Pool"],
    location: { type: "Point", coordinates: [73.7587, 15.5652] }
  },
  {
    name: "Novotel Goa Candolim",
    price: 7200,
    address: "Anna Waddo, Candolim, Goa 403515",
    contact: 8327112222,
    rating: 4.4,
    reviews: "Comfortable rooms near Candolim beach.",
    city: "Goa",
    amenities: ["Pool", "Spa", "Bar"],
    location: { type: "Point", coordinates: [73.7682, 15.5238] }
  },
  {
    name: "Hyatt Centric Candolim Goa",
    price: 9600,
    address: "Anna Vaddo, Main Candolim Road, Goa 403515",
    contact: 8327161234,
    rating: 4.6,
    reviews: "Modern stay with excellent breakfast.",
    city: "Goa",
    amenities: ["WiFi", "Pool", "Fitness Center"],
    location: { type: "Point", coordinates: [73.7665, 15.5210] }
  },
  {
    name: "Taj Fort Aguada Resort & Spa",
    price: 14500,
    address: "Sinquerim, Bardez, Goa 403515",
    contact: 8326645858,
    rating: 4.7,
    reviews: "Heritage luxury with beach access.",
    city: "Goa",
    amenities: ["Spa", "Sea View", "Fine Dining"],
    location: { type: "Point", coordinates: [73.7651, 15.4986] }
  },
  {
    name: "The Leela Goa",
    price: 19500,
    address: "Mobor Beach, Cavelossim, Goa 403731",
    contact: 8322871234,
    rating: 4.8,
    reviews: "Ultra luxury on a private beach.",
    city: "Goa",
    amenities: ["Private Beach", "Golf", "Spa"],
    location: { type: "Point", coordinates: [73.9353, 15.1766] }
  }
];

  try {
    const saved = await hotels.insertMany(goaHotels);
    console.log("hotels added:", saved);
  } catch (err) {
    console.error("Error:", err);
  } finally {
    mongoose.disconnect();
  }
};

addRestaurant();
