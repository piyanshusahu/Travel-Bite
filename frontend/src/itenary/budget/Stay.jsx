import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";
import Carousel from "./Carousel";
import Aos from "aos";
import { useLocation, useNavigate } from "react-router-dom";
import HotelCard from "./HotelCard";
import BottomNav from "./BottomNav.js";

function Stay() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const dest = queryParams.get("dest");
  const [stayBudget, setStayBudget] = useState(0);
  const [isHotel, setIsHotel] = useState(false);
  const [isHostel, setIsHostel] = useState(false);
  const [isDorm, setIsDorm] = useState(false);

  const [hotel, setHotel] = useState([]);
  const [hostel, setHostel] = useState([]);
  const [dorm, setDorm] = useState([]);

  const [showLabel, setLabel] = useState(false);

  let handleHotel = () => {
    setIsHotel(!isHotel);
    setIsHostel(false);
    setIsDorm(false);
  };
  let handleHostel = () => {
    setIsHostel(!isHostel);
    setIsHotel(false);
    setIsDorm(false);
  };
  let handleDorm = () => {
    setIsDorm(!isDorm);
    setIsHostel(false);
    setIsHotel(false);
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
    Aos.init({ duration: 2000 });

    fetch("http://localhost:3002/getHostels")
      .then((response) => response.json())
      .then((data) => {
        const filteredHostels = data.filter((hostel) => hostel.city === dest);
        setHostel(filteredHostels);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [dest]);
  useEffect(() => {
    if (isHotel && hotel.length === 0) {
      alert("No hotels found at your budget");
      setIsHotel(false);
    }
    if (isHostel && hostel.length === 0) {
      alert("No hostels found at your budget");
      setIsHostel(false);
    }
    if (isDorm && dorm.length === 0) {
      alert("No dormitories found at your budget");
      setIsDorm(false);
    }
  }, [hotel, hostel, dorm, isHotel, isHostel, isDorm]);

  return (
    <div className="budgetContainer" style={{ marginTop: "3%" }}>
    {console.log(hotel)}
      <div
        className="stayBudget"
        style={{ display: "flex", gap: "20px", alignItems: "center" }}
      >
        <div>
          <TextField
            id="outlined-basic"
            label="Stay Budget"
            variant="outlined"
            type="number"
            inputProps={{ min: 0, step: 100 }}
            value={stayBudget}
            onChange={(e) => setStayBudget(e.target.value)}
          />
        </div>
        <div>
          <Slider
            defaultValue={1000}
            min={0}
            max={100000}
            step={100}
            value={stayBudget}
            aria-label="Default"
            style={{ width: "50vw" }}
            onChange={(e) => setStayBudget(Number(e.target.value))}
            onMouseOver={() => setLabel(true)}
            onMouseLeave={() => setLabel(false)}
            valueLabelDisplay={showLabel ? "on" : "off"}
          />
        </div>
      </div>
      <div
        className="stay"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          padding: "2rem",
        }}
      >
        <ItemCard img={"./media/images/hotel.png"} onClick={handleHotel} />
        <ItemCard img={"./media/images/hostel.png"} onClick={handleHostel} />
        <ItemCard img={"./media/images/dorm.png"} onClick={handleDorm} />
      </div>
      <div className="allStay">
        {isHotel && <BottomNav stayPlace={hotel} />}
        
        
        {/* {isHotel && <Carousel places={hotel} />} */}
        {/* <BottomNav /> */}

        {/* {isHotel && <BottomNav stayPlace={hotel} />}
        {isHostel && <Carousel places={hostel} />}
        {isDorm && <Carousel places={dorm} />} */}
      </div>
    </div>
  );
}

export default Stay;
