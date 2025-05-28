import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";
import Carousel from "./Carousel";
import Aos from "aos";
import { useLocation, useNavigate } from "react-router-dom";

function Hotel({stayBudget,dest}) {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const dest = queryParams.get("dest");
  const [isHotel, setIsHotel] = useState(false);

  const [hotel, setHotel] = useState([]);

  let handleHotel = () => {
    setIsHotel(!isHotel);
    setIsHostel(false);
    setIsDorm(false);
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });

    fetch("http://localhost:3002/getHotels")
      .then((response) => response.json())
      .then((data) => {
        const filteredHotels = data
          .filter(
            (hotel) => hotel.city === dest && stayBudget >= hotel["price"][0]
          )
          .sort((a, b) => b.price[0] - a.price[0]);
        setHotel(filteredHotels);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [dest, stayBudget]);

  useEffect(() => {
    if (isHotel && hotel.length === 0) {
      alert("No hotels found at your budget");
      setIsHotel(false);
    }
  }, [hotel, isHotel]);
  return (
    <div
      className="hotelContainer"
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        padding: "2rem",
      }}
    >
      {console.log(hotel)}

      <ItemCard img={"./media/images/hotel.png"} onClick={handleHotel} />
      <div className="allStay">{isHotel && <Carousel places={hotel} />}</div>
    </div>
  );
}

export default Hotel;
