import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Aos from "aos";
import EatDisplay from "./EatDisplay";
import DestinationCard from "./DestinationCard";

function DestinationDisplay({ food }) {
  const diesel_price = 92.43;
  const petrol_price = 105.41;
  const cng_price = 89.5;

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const src = queryParams.get("src");
  const dest = queryParams.get("dest");
  const no = queryParams.get("no");
  const dep = queryParams.get("dep");
  const ret = queryParams.get("ret");

  // ✅ safer days calculation (ignores timezones & partial days)
  const depDate = new Date(dep);
  const retDate = new Date(ret);
  depDate.setHours(0, 0, 0, 0);
  retDate.setHours(0, 0, 0, 0);
  const days = Math.max(
    1,
    Math.round((retDate - depDate) / (1000 * 60 * 60 * 24))
  );

  const [place, setPlace] = useState([]);
  const [transportPrice, setTransportPrice] = useState([]);

  useEffect(() => {
    Aos.init({ duration: 2000 });

    fetch("http://localhost:3002/getPlaces")
      .then((response) => response.json())
      .then((data) => {
        const filteredPlaces = data.filter((p) => p.city === dest);

        // helper: convert "HH:MM AM/PM" to minutes
        const convertToMinutes = (timeStr) => {
          if (!timeStr || typeof timeStr !== "string") return -1;
          timeStr = timeStr.trim();
          if (timeStr.toLowerCase().includes("open 24 hours")) return 0;

          const [time, modifier] = timeStr.split(" ");
          if (!time || !modifier) return -1;

          let [hours, minutes] = time.split(":").map(Number);
          if (modifier === "PM" && hours !== 12) hours += 12;
          if (modifier === "AM" && hours === 12) hours = 0;

          return hours * 60 + minutes;
        };

        // sort by closing time / opening time
        const sortedPlaces = [...filteredPlaces].sort((a, b) => {
          const [aOpen, aClose] = a.timings?.split("–") || ["", ""];
          const [bOpen, bClose] = b.timings?.split("–") || ["", ""];

          const aCloseTime = aClose ? convertToMinutes(aClose.trim()) : 1439;
          const bCloseTime = bClose ? convertToMinutes(bClose.trim()) : 1439;

          if (aCloseTime !== bCloseTime) {
            return aCloseTime - bCloseTime;
          }

          const aOpenTime = aOpen ? convertToMinutes(aOpen.trim()) : 0;
          const bOpenTime = bOpen ? convertToMinutes(bOpen.trim()) : 0;

          return aOpenTime - bOpenTime;
        });

        // ✅ chunk places evenly by number of days
        let ans = [];
        if (sortedPlaces.length > 0) {
          const chunkSize = Math.ceil(sortedPlaces.length / days);
          for (let i = 0; i < sortedPlaces.length; i += chunkSize) {
            ans.push(sortedPlaces.slice(i, i + chunkSize));
          }
        }

        setPlace(ans);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [dest, days]);

  // ✅ compute average coordinates of each day's places
  const avgCoord = [];
  for (let i = 0; i < place.length; i++) {
    let avglat = 0;
    let avglon = 0;
    for (let j = 0; j < place[i].length; j++) {
      avglat += place[i][j].location.coordinates[0];
      avglon += place[i][j].location.coordinates[1];
    }
    if (place[i].length > 0) {
      avglat /= place[i].length;
      avglon /= place[i].length;
      avgCoord.push(avglat, avglon);
    }
  }

  return (
    <>
      <div
        className="section-box"
        style={{
          backgroundColor: "rgb(0, 153, 204)",
          minHeight: `${days * 8}vh`,
          minWidth: `${days * 5}vw`,
        }}
      >
        <h5 style={{ display: "flex", justifyContent: "center" }}>
          Destination
        </h5>

        {place.map((placesForDay, dayIndex) => (
          <DestinationCard
            key={dayIndex}
            day={dayIndex + 1}
            places={placesForDay}
            transport={transportPrice[dayIndex]}
          />
        ))}
      </div>

      {/* Food places */}
      <EatDisplay avgCoord={avgCoord} food={food} />
    </>
  );
}

export default DestinationDisplay;
