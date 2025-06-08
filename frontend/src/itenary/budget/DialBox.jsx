import React from "react";
import "./DialBox.css";
/*import '@fortawesome/fontawesome-free/css/all.min.css';
 */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareXmark,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

export default function DialBox({stayPlace}){
  let name = stayPlace.name;
  let address = stayPlace.address;
  let contact = stayPlace.contact;
  let city = stayPlace.city;
  let amenities = stayPlace.amenities;

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
        Taj Mahal Palace
        <span
          className="stars"
          style={{ marginLeft: "10px", color: "#FFD700" }}
        >
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
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

      <p className="description">
        Experience timeless luxury at the iconic Taj Mahal Palace in Mumbai.
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
          <FontAwesomeIcon icon={faPhone} />
          {contact}
        </div>
        <div className="address">
          <FontAwesomeIcon icon={faLocationDot} />
          {address}
        </div>
        {amenities}
      </div>
      <hr className="divider" />
      <div className="characteristics">
        <h3 className="subtitle">Characteristics</h3>
        <div className="icons-with-text">
          <span>
            <i className="fas fa-wifi" aria-hidden="true"></i> Wi-Fi
          </span>
          <span>
            <i className="fas fa-desktop" aria-hidden="true"></i> TV
          </span>
          <span>
            <i className="fas fa-snowflake" aria-hidden="true"></i> Air
            Conditioning
          </span>
          <span>
            <i className="fas fa-chair" aria-hidden="true"></i> Lounge Area
          </span>
          <span>
            <i className="fas fa-mug-hot" aria-hidden="true"></i> Coffee
          </span>
          <span>
            <i className="fas fa-paw" aria-hidden="true"></i> Pet Friendly
          </span>
          <span>
            <i className="fas fa-wheelchair" aria-hidden="true"></i>{" "}
            Accessibility
          </span>
        </div>
      </div>
      <hr className="divider" />
    </div>
  );
};

