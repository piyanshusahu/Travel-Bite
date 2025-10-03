import * as React from "react";
import "./DormitoryCard.css";
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';

import {
  FaStar,
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

export default function DormitoryCard({ stayPlace }) {
  const navigate = useNavigate();
  const star = stayPlace.star;
  const [popup, setPopup] = React.useState(false);
  const [isSelected, setIsSelected] = React.useState(false);

  const handleClose = () => {
    setPopup(false);
  };

  return (
    <>
      <div 
        className="Dormitory-card clickable-card"
        onClick={() => setPopup(true)}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.01)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        style={{ transition: "transform 0.2s ease", cursor: "pointer" }}
      >
        <img
          src="/media/images/hotp.webp"
          alt="Taj Mahal Palace"
          className="Dormitory-image"
        />

        <div className="Dormitory-content">
          <h2
            className="Dormitory-title"
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

          <p className="Dormitory-description">
            Experience timeless luxury at the iconic {stayPlace.name} in {stayPlace.city}.
          </p>

          <div className="Dormitory-icons">
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

        <div className="Dormitory-sidebar">
          <div className="Dormitory-price">
            <p style={{ fontFamily: "cursive", color: "black" }}>Starting at</p>₹
            {Array.isArray(stayPlace.price) ? stayPlace.price[0] : stayPlace.price}
          </div>

          <button
            className={`select-button ${isSelected ? "selected" : ""}`}
            onClick={(e) => {
              e.stopPropagation();
              setIsSelected(!isSelected);
            }}
          >
            {isSelected ? "SELECTED" : "SELECT"}
          </button>
        </div>
      </div>

      {/* POPUP Dialog OUTSIDE of the card */}
      {popup && (
        <ShowDetails
          stayPlace={stayPlace}
          open={popup}
          onClose={handleClose}
        />
      )}
    </>
  );
}
