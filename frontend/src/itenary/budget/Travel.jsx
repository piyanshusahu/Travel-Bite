import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";
import { useLocation } from "react-router-dom";
import Carousel from "./Carousel";
import Aos from "aos";
import { Button } from "@mui/material";

import CarRNav from './CarRNav.js';

function Travel() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const dest = queryParams.get("dest");
  const [travelBudget, setTravelBudget] = useState(0);
  const [isCarRental, setIsCarRental] = useState(false);

  const [carRental, setCarRental] = useState([]);

  function handlecarRental() {
    setIsCarRental(!isCarRental);
  }

  useEffect(() => {
    if (isCarRental && carRental.length === 0) {
      alert("No car rentals found at your budget");
      setIsCarRental(false);
    }
  }, [carRental, isCarRental]);

  useEffect(() => {
    Aos.init({ duration: 2000 });

    fetch("http://localhost:3002/getCarRentals")
      .then((response) => response.json())
      .then((data) => {
        const filteredCarRental = data
          .filter(
            (car) => car.city === dest && travelBudget + 100 >= car["price"][0]
          )
          .sort((a, b) => b.price[0] - a.price[0]);
        setCarRental(filteredCarRental);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [dest, travelBudget]);

  return (
    <>
      <div
        className="travelBudget"
        style={{ display: "flex", gap: "20px", marginTop: "6%" }}
      >
        <div>
          <TextField
            id="outlined-basic"
            label="Travel Budget"
            variant="outlined"
            type="number"
            inputProps={{ min: 0, step: 100 }}
            value={travelBudget}
            onChange={(e) => setTravelBudget(e.target.value)}
          />
        </div>
        <div>
          <Slider
            defaultValue={1000}
            min={0}
            max={10000}
            step={100}
            value={travelBudget}
            aria-label="Default"
            style={{ width: "50vw", marginTop: "10px" }}
            onChange={(e) => setTravelBudget(e.target.value)}
          />
        </div>
        <div className="show">
          <Button
            variant="contained"
            style={{
              borderRadius: "2rem",
              height: "6vh",
              width: "6vw",
              textAlign: "center",
              fontFamily:"cursive",

            }}
            onClick={() => setIsCarRental(!isCarRental)}
          >
            Show
          </Button>
        </div>
      </div>



      {isCarRental && <CarRNav  key={carRental._id} places = {carRental}/>}  

      <div className="allStay">
              
              
              
              {/* {isHotel && <Carousel places={hotel} />} */}
              {/* <BottomNav /> */}
      
              {/* {isHotel && <BottomNav stayPlace={hotel} />}
              {isHostel && <Carousel places={hostel} />}
              {isDorm && <Carousel places={dorm} />} */}
            </div>
    </>
  );
}

export default Travel;
