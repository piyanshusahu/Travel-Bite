import React from "react";
import "./DialBox.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faWifi,
  faSpa,
  faPhone,
  faLocationDot,
  faUtensils,
  faSwimmingPool,
  faParking,
  faSnowflake,
  faDumbbell,
  faBriefcase,
  faMusic,
  faStarHalf,
  faWater,
  faCar,
  faSpoon,
  faCab,
  faBars,
  faGlassCheers,
  faTv,
  faHotel,
  faPerson
} from "@fortawesome/free-solid-svg-icons";

const amenityIcons = {
  WiFi: faWifi,
  Spa: faSpa,
  Restaurant: faUtensils,
  // Pool: faSwimmingPool,
  "Swimming Pool": faSwimmingPool,
  "Fitness Center": faDumbbell,
  Parking: faParking,
  AC: faSnowflake,
  "Fine Dining": faUtensils,
  "Business Center": faBriefcase,
  "Event Spaces": faMusic,
  "Sea View":faWater,
  "Valet Parking":faCar,
  "Multiple Restaurants":faUtensils,
  "Luxury Spa":faSpa,
  "Airport Shuttle":faCab,
  "Pool":faSwimmingPool,
  "Gym":faDumbbell,
  "Bar":faGlassCheers,
  "Breakfast":faUtensils,
  "TV":faTv,
  "Room Service":faPerson
};




export default function DialBox({ place }) {
  let name = place.name;
  let address = place.address;
  let contact = place.contact;
  let city = place.city;
  

  const showMaps = () => {
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      address
    )}`;
    window.open(mapUrl, "_blank");
  };

  return (
    <div className="dialcontainer">
      <script src="https://cdn.tailwindcss.com"></script>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        rel="stylesheet"
      />

      <div className="image-container">
        <img
          src="https://storage.googleapis.com/a1aa/image/0236636d-25d1-45a9-ba84-590563cda512.jpg"
          alt="Santorini island view"
          className="main-image"
        />
      </div>
      <h2 className="title">
        {name}
        
      </h2>
      

      <p className="description">
        Experience timeless luxury at the iconic {place.name} in {place.city}.
        Overlooking the majestic Gateway of India, this historic hotel blends
        old-world elegance with modern hospitality. Each room offers a unique
        blend of Indian heritage and contemporary comfort.
      </p>
      <p className="description">
        Enjoy world-class dining, relax at the Jiva Spa, or take a leisurely
        stroll through the grand corridors that have welcomed royalty,
        dignitaries, and celebrities. Whether you're here for business or
        leisure, the Taj ensures an unforgettable stay in the heart of Mumbai.
      </p>

      <div>
        <div className="contact">
          <FontAwesomeIcon icon={faPhone} style={{ marginRight: "2%" }} />
          +91 {contact}
        </div>
        <div className="address flex">
          <FontAwesomeIcon
            icon={faLocationDot}
            style={{ marginRight: "2%", marginLeft: "0.5%" }}
          />
          <div
            style={{ cursor: "pointer" }}
            onMouseOver={(e) => {
              e.target.style.color = "blue";
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "black";
            }}
            onClick={showMaps}
          >
            {address}
          </div>
        </div>
      </div>
      <hr className="divider" />
      
    </div>
  );
}
