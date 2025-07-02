import * as React from "react";
import "./HotelCard.css";
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';

import {
  FaStar,
  FaWifi,
  FaTv,
  FaSnowflake,
  FaHotTub,
  FaDog,
  FaWheelchair,
  FaStar
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import ShowDetails from "./ShowDetails";
import { useNavigate } from "react-router-dom";

export default function HotelCard({ stayPlace }) {
  const navigate = useNavigate();
  const star = stayPlace.star;
  const [popup, setPopup] = React.useState(false);

  const handleClose = () => {
    setPopup(false);
  };

  return (
    <div className="hotel-card">
      <img
        src="/media/images/hotp.webp"
        alt="Taj Mahal Palace"
        className="hotel-image"
      />

      <FontAwesomeIcon
        style={{ cursor: "pointer" }}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        onClick={() => setPopup(true)}
        icon={faSquareArrowUpRight}
      />

      <div className="hotel-content">
        <h2
          className="hotel-title"
          style={{ fontSize: "1.3rem", fontFamily: "cursive" }}
        >
          {stayPlace.name}
          <span className="stars">
            {[...Array(star)].map((_, i) => (
              <FaStar key={i} className="star-icon" />
            ))}
          </span>
        </h2>

        <div className="rating-badge">
          <span className="rating-value">{stayPlace.rating}</span>
          <span className="stars" style={{ color: "#FFD700" }}>
            ★★★★☆
          </span>
          <span
            className="rating-count"
            style={{ color: "#4B5563", marginLeft: "4px" }}
          >
            (1,044)
          </span>
        </div>

        <p className="hotel-description">
          Experience timeless luxury at the iconic {stayPlace.name} in{" "}
          {stayPlace.city}.
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
          <span className="promo-check">✔</span> Special Offer Ending Today!
        </div>
      </div>

      <div className="hotel-sidebar">
        <div className="hotel-price">
          <p style={{ fontFamily: "cursive", color: "black" }}>Starting at</p>₹
          {stayPlace.price[0]}
        </div>

        <button className="select-button" onClick={() => setPopup(true)}>
          SELECT
        </button>
      </div>

      {popup && (
        <ShowDetails stayPlace={stayPlace} open={popup} onClose={handleClose} />
      )}
    </div>
    
  );
}
