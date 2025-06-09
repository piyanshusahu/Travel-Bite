import * as React from 'react';
import './HotelCard.css';

import { FaStar } from 'react-icons/fa';
import {
  FaWifi,
  FaTv,
  FaSnowflake,
  FaHotTub,
  FaDog,
  FaWheelchair
} from 'react-icons/fa';
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
};


export default function HotelCard (){

     const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };
     

  return (
    
    <div className="hotel-card">
        <script src="https://cdn.tailwindcss.com"></script>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        rel="stylesheet"
      />

      <img
        src="\media\images\hotp.webp" 
        alt="Taj Mahal Palace"
        className="hotel-image"
      />

      <div className="hotel-content">
        <div>
          <h2 className="hotel-title">Hotel
             <span className="stars">
    {[...Array(5)].map((_, i) => (
      <FaStar key={i} className="star-icon" />
    ))}
  </span>
          </h2>
          
          <div className="rating-badge">
        <span className="rating-value">4.7</span>
        <span className="stars" style={{ color: "#FFD700" }}>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star-half-alt"></i>
        </span>
        <span
          className="rating-count"
          style={{ color: "#4B5563", marginLeft: "4px" }}
        >
          (1,044)
        </span>
      </div>
          
          <p className="hotel-description">
            Experience timeless luxury at the iconic Taj Mahal Palace in Mumbai. Overlooking the
            majestic Gateway of India, this historic hotel blends old-world elegance with modern
            hospitality.
          </p>

          <div className="hotel-icons">
            
            <FaWifi />
            <FaTv />
            <FaSnowflake />
            <FaHotTub />
            <FaDog />
            <FaWheelchair />
          </div>

          <div className="promo-bar">
            <span className="promo-check">✔</span>
             Special Offer Ending Today!
          </div>
        </div>
      </div>

      <div className="hotel-sidebar">
        <div className="hotel-price">
          <p className="discount-price">₹1,624</p>
         
          {/* <p className="original-price">$1,804.44</p> */}
        </div>
        
        <button className="select-button" variant="contained" onClick={handleClickOpen("paper")}>
            SELECT
            </button>
      </div>
    </div>
  );
};

