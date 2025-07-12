import Aos from "aos";
import { ConnectionStates } from "mongoose";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function EatDisplay({ avgCoord }) {
  const [resteraunts, setResteraunts] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const src = queryParams.get("src");
  const dest = queryParams.get("dest");
  const no = queryParams.get("no");
  const dep = queryParams.get("dep");
  const ret = queryParams.get("ret");

  const depDate = new Date(dep);
  const retDate = new Date(ret);
  const timeDifferenceMs = retDate.getTime() - depDate.getTime();
  const days = Math.ceil(timeDifferenceMs / (1000 * 60 * 60 * 24));

  useEffect(() => {
    Aos.init({ duration: 2000 });
    const fetchResteraunts = async () => {
      try {
        const response = await fetch("http://localhost:3002/getResteraunts");
        const data = await response.json();

        const filteredPlaces = data.filter((place) => place.city === dest);
        let ans = [];
        for (let j = 1; j < avgCoord.length; j += 2) {
          let chunk = [];
          for (let i = 0; i < filteredPlaces.length; i++) {
            if (
              Math.abs(avgCoord[j - 1] - filteredPlaces[i].coordinates.lng) <=
                0.05 &&
              Math.abs(avgCoord[j] - filteredPlaces[i].coordinates.lat) <= 0.05
            ) {
              chunk.push(filteredPlaces[i]);
            }
          }
          if (chunk.length != 0) ans.push(chunk);
        }
        setResteraunts(ans);
        console.log(resteraunts)
      } catch (e) {
        console.error("Failed to fetch restaurants:", e);
      }
    };

    fetchResteraunts();
  }, [dest, days]);

  return (
    <>
      <div
        className="section-box"
        style={{ backgroundColor: "rgb(0, 153, 204)" }}
      >
        <h5>Food Places</h5>
        {resteraunts.map((placesForDay, dayIndex) => (
          <li key={dayIndex} className="day-item">
            Day {dayIndex + 1}:{" "}
            {placesForDay.length > 0
              ? placesForDay.map((p) => p.name).join(" / ")
              : "No places"}
          </li>
        ))}
      </div>
    </>
  );
}

export default EatDisplay;
