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

        // ✅ distance helper (Haversine formula)
        const haversineDistance = (coord1, coord2) => {
          const toRad = (x) => (x * Math.PI) / 180;
          const [lat1, lon1] = coord1;
          const [lat2, lon2] = coord2;

          const R = 6371; // km
          const dLat = toRad(lat2 - lat1);
          const dLon = toRad(lon2 - lon1);
          const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(toRad(lat1)) *
              Math.cos(toRad(lat2)) *
              Math.sin(dLon / 2) *
              Math.sin(dLon / 2);
          const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
          return R * c;
        };

        // ✅ compute average coordinate
        let avgLat = 0,
          avgLon = 0;
        filteredPlaces.forEach((p) => {
          avgLat += p.location.coordinates[0];
          avgLon += p.location.coordinates[1];
        });
        avgLat /= filteredPlaces.length;
        avgLon /= filteredPlaces.length;
        const avgCoord = [avgLat, avgLon];

        // ✅ sort all places by distance first
        const distanceSorted = [...filteredPlaces].sort((a, b) => {
          const distA = haversineDistance(a.location.coordinates, avgCoord);
          const distB = haversineDistance(b.location.coordinates, avgCoord);
          return distA - distB;
        });

        // ✅ chunk based on distance ordering
        let ans = [];
        if (distanceSorted.length > 0) {
          const chunkSize = Math.ceil(distanceSorted.length / days);
          for (let i = 0; i < distanceSorted.length; i += chunkSize) {
            ans.push(distanceSorted.slice(i, i + chunkSize));
          }
        }

        // ✅ sort each chunk by timing (closing time → opening time)
        const timeSortedChunks = ans.map((chunk) =>
          [...chunk].sort((a, b) => {
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
          })
        );

        setPlace(timeSortedChunks);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [dest, days]);

  // ✅ compute average coordinates for food places
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
