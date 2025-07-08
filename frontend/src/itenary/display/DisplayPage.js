import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./DisplayPage.css";
import Button from "@mui/material/Button";
import DetailItenary from "./DetailItenary";
import Aos from "aos";
import axios from "axios";
import DestinationDisplay from "./DestinationDisplay";
import ChatBot from "./ChatBot";

function DisplayPage() {
  const diesel_price = 92.43;
  const petrol_price = 105.41;
  const cng_price = 89.5;

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const [displayDetail, setDisplayDetail] = useState(false);

  const [resteraunt, setResteraunt] = useState([]);
  const [transportPrice, setTransportPrice] = useState([]);

  

  const handleDetail = () => {
    setDisplayDetail(!displayDetail);
  };

  const src = queryParams.get("src");
  const dest = queryParams.get("dest");
  const no = queryParams.get("no");
  const dep = queryParams.get("dep");
  const ret = queryParams.get("ret");

  const depDate = new Date(dep);
  const retDate = new Date(ret);
  const timeDifferenceMs = retDate.getTime() - depDate.getTime();
  const days = Math.ceil(timeDifferenceMs / (1000 * 60 * 60 * 24));
  const dayItems = Array.from({ length: days }, (_, index) => index + 1);

  async function findDistance(origin, destination) {
    try {
      const res = await axios.get("http://localhost:3002/api/distance", {
        params: { origin, destination },
      });
      console.log(res);
      const element = res.data.rows[0];
      if (element.status !== "OK") return 0;
      return element.distance.value / 1000;
    } catch (err) {
      console.error("Distance fetch error:", err.message);
      return 0;
    }
  }

  const calculateDailyTransportCosts = async (chunkedPlaces) => {
    const dailyCosts = [];

    for (let day of chunkedPlaces) {
      let dayDistance = 0;
      for (let i = 0; i < day.length - 1; i++) {
        const origin = `${day[i].location.coordinates[0]},${day[i].location.coordinates[1]}`;
        const destination = `${day[i + 1].location.coordinates[0]},${
          day[i + 1].location.coordinates[1]
        }`;
        const dist = await findDistance(origin, destination);
        dayDistance += dist;
        console.log(origin);
      }
      const cost = dayDistance * petrol_price;
      dailyCosts.push({
        cost: cost.toFixed(2),
        distance: dayDistance.toFixed(2),
      });
    }

    setTransportPrice(dailyCosts);
  };

  return (
    <>
      <div className="itenary">
        <div className="heading">
          <h1
            style={{
              marginLeft: "36%",
              fontWeight: "bold",
              fontFamily: "sans-serif",
              color: "rgb(40,75,100)",
              fontSize: "3.5rem",
            }}
          >
            TRAVEL ITINERARY
          </h1>
        </div>

        <div
          className="heading-details flex"
          style={{ marginLeft: "43%", fontSize: "1.2rem" }}
        >
          <div>
            <span>TRIP DURATION: </span>
            <span style={{ fontWeight: "bold" }}>{days} DAYS</span>
          </div>
        </div>

        <div
          style={{
            marginTop: "2%",
            marginBottom: "2%",
           display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)", /* 2 columns */
  gap: "16px",
  padding: "20px",
  maxWidth: "90%",
  margin: "auto",
          }}
        >
          {/* Destination */}
          <DestinationDisplay />

          {/* Eat */}
          <div
            className="section-box"
            style={{ backgroundColor: "rgb(82, 187, 85)" }}
          >
            <h5>Eat</h5>
            {resteraunt.map((placesForDay, dayIndex) => (
              <li key={dayIndex} className="day-item">
                Day {dayIndex + 1}:{" "}
                {placesForDay.length > 0
                  ? placesForDay.map((p) => p.name).join(", ")
                  : "No places"}
              </li>
            ))}
          </div>

          {/* Leisure */}
          <div
            className="section-box"
            style={{ backgroundColor: "rgb(0, 153, 204)" }}
          >
            <h5>Leisure</h5>
            {resteraunt.map((placesForDay, dayIndex) => (
              <li key={dayIndex} className="day-item">
                Day {dayIndex + 1}:{" "}
                {placesForDay.length > 0
                  ? placesForDay.map((p) => p.name).join(", ")
                  : "No places"}
              </li>
            ))}
          </div>

        </div>
      </div>

      <div
        className="detail flex"
        style={{ justifyContent: "center", marginBottom: "3%" }}
      >
        <Button
          variant="contained"
          style={{
            height: "10vh",
            width: "20vw",
            borderRadius: "2rem",
            fontWeight: "bold",
            fontSize: "1rem",
          }}
          onClick={handleDetail}
        >
          Ask anything to TravelBite's AI Bot
        </Button>
      </div>
      {displayDetail && <ChatBot />}
    </>
  );
}

export default DisplayPage;
