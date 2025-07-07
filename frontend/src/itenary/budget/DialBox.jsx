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




export default function DialBox({ stayPlace }) {
  let name = stayPlace.name;
  let address = stayPlace.address;
  let contact = stayPlace.contact;
  let city = stayPlace.city;
  let amenities = stayPlace.amenities;
  let star = stayPlace.star;
  let rating = stayPlace.rating;

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
        <span
          className="stars"
          style={{ marginLeft: "10px", color: "#FFD700" }}
        >
          {Array.from({ length: star }, (_, i) => (
            <FontAwesomeIcon
              key={i}
              icon={faStar}
              style={{ fontSize: "0.8rem", color: "#FFD700" }}
            />
          ))}
        </span>
      </h2>
      <div className="rating-badge">
        <span className="rating-value">4.7</span>
        <span className="stars" style={{ color: "#FFD700" }}></span>
        <span style={{ color: "#FFD700" }}>
          {Array.from({ length: Math.floor(rating) }, (_, i) => (
            <FontAwesomeIcon
              key={i}
              icon={faStar}
              style={{ fontSize: "0.8rem", marginRight: "2px" }}
            />
          ))}

          {rating % 1 !== 0 ? (
            <FontAwesomeIcon
              icon={faStarHalf}
              style={{ fontSize: "0.8rem", marginRight: "2px" }}
            />
          ) : null}

          <span
            style={{ color: "#4B5563", marginLeft: "6px", fontSize: "0.8rem" }}
          >
            (1,044)
          </span>
        </span>
      </div>

      <p className="description">
        Experience timeless luxury at the iconic {stayPlace.name} in {stayPlace.city}.
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
      <div className="characteristics">
        <h3 className="subtitle">Characteristics</h3>
        <div className="icons-with-text flex flex-wrap gap-3 mt-2">
          {amenities?.map((el, idx) => (
            <div
              key={idx}
              className="amenity-item"
              style={{ marginRight: "5%" }}
            >
              {amenityIcons[el] && (
                <>
                  <FontAwesomeIcon
                    icon={amenityIcons[el]}
                    style={{ marginLeft: "5px", marginRight: "5px" }}
                  />
                </>
              )}
              {el}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
