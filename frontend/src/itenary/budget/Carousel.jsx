import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Carousel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import ShowDetails from "./ShowDetails";

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
            <div
              className="hotel-card"
              style={{ transition: "all ease-in 0.2s",cursor:"pointer" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.02)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
              onClick={() => setShowDetails(place)}
            >
              <img src={place.image} alt={place.name} />
              <h3>{place.name}</h3>
              <p>{place.address}</p>
              <p>₹{place.price[0]}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {showDetails && <ShowDetails stayPlace={showDetails} />}
    </div>
  );
};

export default Carousel;
