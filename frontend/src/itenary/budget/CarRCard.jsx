import * as React from "react";
import "./CarRCard.css";
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';

import {
  FaWifi,
  FaTv,
  FaSnowflake,
  FaHotTub,
  FaDog,
  FaWheelchair,
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import ShowDetails from "./ShowDetails";
import { useNavigate } from "react-router-dom";

export default function CarRCard({ places }) {

  const navigate = useNavigate();
 
  const [popup, setPopup] = React.useState(false);

  const handleClose = () => {
    setPopup(false);
  };

  

  return (
    <div className="CarR-card">
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

      <div className="CarR-content">
        <h2
          className="CarR-title"
          style={{ fontSize: "1.3rem", fontFamily: "cursive" }}
        >
          {places.name}
        </h2>

        <div className="rating-badge">
          <span className="rating-value">{places.rating}</span>
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

        <p className="CarR-description">
          Experience timeless luxury at the iconic {places.name} in{" "}
          {places.city}.
        </p>

        <div className="CarR-icons">
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
          {places.price[0]}
        </div>

        <button className="select-button" onClick={() => setPopup(true)}>
          SELECT
        </button>
      </div>

      {popup && (
        <ShowDetails places={places} open={popup} onClose={handleClose} />
      )}
    </div>
  );
}
