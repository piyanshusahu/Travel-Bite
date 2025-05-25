import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Carousel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

const Carousel = ({ places }) => {
  const [showDetails, setShowDetails] = useState(null);
  return (
    <div
      className="hotel-carousel-container"
      style={{ transform: "translateZ(0)" }}
    >
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={4}
        navigation
        breakpoints={{
          1200: { slidesPerView: 4 },
          768: { slidesPerView: 2 },
          480: { slidesPerView: 1 },
        }}
      >
        {places.map((place, index) => (
          <SwiperSlide key={index}>
            <div className="hotel-card" onClick={() => setShowDetails(place)}>
              <img src={place.image} alt={place.name} />
              <h3>{place.name}</h3>
              <p>{place.address}</p>
              <p>₹{place.price[0]}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {showDetails && (
        <div
          className="showHotelDetails"
          style={{
            border: "1px solid black",
            height: "1000px",
            width: "1000px",
            transform: "translateZ(999px)",
            position: "fixed",
            zIndex: 999,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
          }}
        >
          <div
            className="close"
            onClick={() => setShowDetails(null)}
            style={{
              position: "relative",
              marginLeft: "98%",
              
            }}
          >
            <FontAwesomeIcon
              icon={faWindowClose}
              style={{transition:"all 100ms ease-in",cursor: "pointer"}}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.3)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            />
          </div>
          <div>
            <p>{showDetails.name}</p>
          </div>
          <div>
            <p>{showDetails.contact}</p>
          </div>
          <div>
            <p>{showDetails.address}</p>
          </div>
          <div>
            <p>{showDetails.price}</p>
          </div>
          <div>
            <p>{showDetails.rooms}</p>
          </div>
          <div>
            <p>{showDetails.star}</p>
          </div>
          <div>
            <p>{showDetails.rating}</p>
          </div>
          <div>
            <p>{showDetails.reviews}</p>
          </div>
          <div>
            <p>{showDetails.city}</p>
          </div>
          <div>
            <p>{showDetails.ammenities}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;
