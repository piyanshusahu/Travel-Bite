import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";
import Carousel from "./Carousel";
import Aos from "aos";
import { useLocation, useNavigate } from "react-router-dom";

function Dormitory({ stayBudget, dest }) {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const destQuery = queryParams.get("dest"); // keep same as hotel

  const [isDormitory, setIsDormitory] = useState(false);
  const [dormitory, setDormitory] = useState([]); // lowercase like hotel

  let handleDormitory = () => {
    setIsDormitory(!isDormitory);
    // setIsHotel(false); // only works if defined globally like in Hotel
    // setIsDorm(false);  // same as above
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });

    fetch("http://localhost:3002/getDorms")
      .then((response) => response.json())
      .then((data) => {
        const filteredDormitorys = data
          .filter(
            (h) => h.city === destQuery && stayBudget >= h["price"][0]
          )
          .sort((a, b) => b.price[0] - a.price[0]);
        setDormitory(filteredDormitorys);
        console.log(dormitory);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [destQuery, stayBudget]);

  useEffect(() => {
    if (isDormitory && dormitory.length === 0) {
      alert("No Dormitorys found at your budget");
      setIsDormitory(false);
    }
  }, [dormitory, isDormitory]);

  return (
    <div
      className="DormitoryContainer"
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        padding: "2rem",
      }}
    >
      {console.log(dormitory)}

      <ItemCard img={"./media/images/Dormitory.png"} onClick={handleDormitory} />
      <div className="allStay">{isDormitory && <Carousel places={dormitory} />}</div>
    </div>
  );
}

export default Dormitory;