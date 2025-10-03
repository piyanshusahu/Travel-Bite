import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";
import Carousel from "./Carousel";
import Aos from "aos";
import { useLocation, useNavigate } from "react-router-dom";

function Hostel({ stayBudget, dest }) {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const destQuery = queryParams.get("dest"); // keep same as hotel

  const [isHostel, setIsHostel] = useState(false);
  const [hostel, setHostel] = useState([]); // lowercase like hotel

  let handleHostel = () => {
    setIsHostel(!isHostel);
    // setIsHotel(false); // only works if defined globally like in Hotel
    // setIsDorm(false);  // same as above
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });

    fetch("http://localhost:3002/getHostels")
      .then((response) => response.json())
      .then((data) => {
        const filteredHostels = data
          .filter(
            (h) => h.city === destQuery && stayBudget >= h["price"][0]
          )
          .sort((a, b) => b.price[0] - a.price[0]);
        setHostel(filteredHostels);
        console.log(hostel);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [destQuery, stayBudget]);

  useEffect(() => {
    if (isHostel && hostel.length === 0) {
      alert("No Hostels found at your budget");
      setIsHostel(false);
    }
  }, [hostel, isHostel]);

  return (
    <div
      className="HostelContainer"
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        padding: "2rem",
      }}
    >
      {console.log(hostel)}

      <ItemCard img={"./media/images/Hostel.png"} onClick={handleHostel} />
      <div className="allStay">{isHostel && <Carousel places={hostel} />}</div>
    </div>
  );
}

export default Hostel;