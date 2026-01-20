import * as React from "react";
import "./HotelCard.css";
import {
  FaStar,
  FaWifi,
  FaTv,
  FaSnowflake,
  FaHotTub,
  FaDog,
  FaWheelchair,
} from "react-icons/fa";
import ShowDetails from "./ShowDetails";

export default function HotelCard({ stayPlace, onClick }) {
  const star = stayPlace.star;
  const [popup, setPopup] = React.useState(false);
  const [isSelected, setIsSelected] = React.useState(false);

  const handleClose = () => {
    setPopup(false);
  };

  return (
    <>
      <div
        className="hotel-card clickable-card"
        onClick={() => setPopup(true)} // popup ONLY
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.01)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        style={{ transition: "transform 0.2s ease", cursor: "pointer" }}
      >
        <img
          src={stayPlace.name || "/media/images/hotp.webp"}
          alt={stayPlace.name || "Hotel"}
          className="hotel-image"
        />

        <div className="hotel-content">
          <h2 className="hotel-title" style={{ fontSize: "1.3rem", fontFamily: "cursive" }}>
            {stayPlace.name}
            <span className="stars">
              {[...Array(star)].map((_, i) => (
                <FaStar key={i} className="star-icon" />
              ))}
            </span>
          </h2>

          <div className="rating-badge">
            <span className="rating-value">{stayPlace.rating}</span>
            <span style={{ color: "#FFD700" }}>★★★★☆</span>
          </div>

          <p className="hotel-description">
            Experience timeless luxury at {stayPlace.name} in {stayPlace.city}.
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
            <p style={{ fontFamily: "cursive", color: "black" }}>Starting at</p>
            ₹{stayPlace.price[0]}
          </div>

          <button
            className={`select-button ${isSelected ? "selected" : ""}`}
            onClick={(e) => {
              e.stopPropagation();       
              setIsSelected(true);       
              onClick();                 
            }}
          >
            SELECT
          </button>
        </div>
      </div>

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
