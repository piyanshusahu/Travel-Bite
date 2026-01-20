import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";
import Aos from "aos";
import { useLocation, useNavigate } from "react-router-dom";
import BottomNav from "./BottomNav.js";

function Stay() {
  const location = useLocation();
  const navigate = useNavigate();

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

  const handleHotel = () => {
    setIsHotel(!isHotel);
    setIsHostel(false);
    setIsDorm(false);
  };

  const handleHostel = () => {
    setIsHostel(!isHostel);
    setIsHotel(false);
    setIsDorm(false);
  };

  const handleDorm = () => {
    setIsDorm(!isDorm);
    setIsHotel(false);
    setIsHostel(false);
  };

  // ✅ FIXED: update URL instead of navigating again
  const handleSelectHotel = (hotelId) => {
    const params = new URLSearchParams(location.search);
    params.set("hotelId", hotelId);

    navigate(
      {
        pathname: "/budget",
        search: params.toString(),
      },
      { replace: true }
    );
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });

    fetch("http://localhost:3002/getHotels")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data
          .filter(
            (h) => h.city === dest && stayBudget >= h.price[0]
          )
          .sort((a, b) => b.price[0] - a.price[0]);

        setHotel(filtered);
      })
      .catch(console.error);
  }, [dest, stayBudget]);

  useEffect(() => {
    fetch("http://localhost:3002/getHostels")
      .then((res) => res.json())
      .then((data) => {
        setHostel(data.filter((h) => h.city === dest));
      })
      .catch(console.error);
  }, [dest]);

  useEffect(() => {
    fetch("http://localhost:3002/getDormitories")
      .then((res) => res.json())
      .then((data) => {
        setDorm(data.filter((d) => d.city === dest));
      })
      .catch(console.error);
  }, [dest]);

  useEffect(() => {
    if (isHotel && hotel.length === 0) {
      alert("No hotels found at your budget");
      setIsHotel(false);
    }
    if (isHostel && hostel.length === 0) {
      alert("No hostels found");
      setIsHostel(false);
    }
    if (isDorm && dorm.length === 0) {
      alert("No dormitories found");
      setIsDorm(false);
    }
  }, [hotel, hostel, dorm, isHotel, isHostel, isDorm]);

  return (
    <div className="budgetContainer" style={{ marginTop: "3%" }}>
      <div
        className="stayBudget"
        style={{ display: "flex", gap: "20px", alignItems: "center" }}
      >
        <TextField
          label="Stay Budget"
          type="number"
          value={stayBudget}
          onChange={(e) => setStayBudget(Number(e.target.value))}
        />

        <Slider
          min={0}
          max={100000}
          step={100}
          value={stayBudget}
          style={{ width: "50vw" }}
          onChange={(e) => setStayBudget(Number(e.target.value))}
          onMouseOver={() => setLabel(true)}
          onMouseLeave={() => setLabel(false)}
          valueLabelDisplay={showLabel ? "on" : "off"}
        />
      </div>

      <div
        className="stay"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          padding: "2rem",
        }}
      >
        <ItemCard img="./media/images/hotel.png" onClick={handleHotel} />
        <ItemCard img="./media/images/hostel.png" onClick={handleHostel} />
        <ItemCard img="./media/images/dorm.png" onClick={handleDorm} />
      </div>

      <div className="allStay">
        {isHotel && (
          <BottomNav
            stayPlace={hotel}
            type="hotel"
            onSelectHotel={handleSelectHotel}
          />
        )}

        {isHostel && (
          <BottomNav stayPlace={hostel} type="hostel" />
        )}

        {isDorm && (
          <BottomNav stayPlace={dorm} type="dorm" />
        )}
      </div>
    </div>
  );
}

export default Stay;
