import Aos from "aos";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DestinationCard from "./DestinationCard";

function EatDisplay({ avgCoord ,food }) {
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
  const days = depDate && retDate && !isNaN(depDate) && !isNaN(retDate) 
  ? Math.ceil(timeDifferenceMs / (1000 * 60 * 60 * 24)) 
  : 0;

  useEffect(() => {
    Aos.init({ duration: 2000 });
    const fetchResteraunts = async () => {
      try {
        const response = await fetch("http://localhost:3002/getResteraunts");
        const data = await response.json();

        const filteredPlaces = data.filter((place) => place.city === dest && place.type===food);
        console.log("restreaunts",filteredPlaces)
        let ans = [];
        for (let dayIndex = 0; dayIndex < days; dayIndex++) {
          let chunk = [];
          const lng = avgCoord[dayIndex * 2];
          const lat = avgCoord[dayIndex * 2 + 1];
        
          for (let i = 0; i < filteredPlaces.length; i++) {
            const coords = filteredPlaces[i].coordinates;
            if (
              coords &&
              Math.abs(lng - coords.lng) <= 0.05 &&
              Math.abs(lat - coords.lat) <= 0.05
            ) {
              chunk.push(filteredPlaces[i]);
            }
          }
        
          ans.push(chunk); // Always push (even if empty)
        }
        
        setResteraunts(ans);
      } catch (e) {
        console.error("Failed to fetch restaurants:", e);
      }
    };

    fetchResteraunts();
  }, [dest, days,food,avgCoord]);

  return (
    <>
      <div
        className="section-box"
        style={{ backgroundColor: "rgb(0, 153, 204)" }}
      >
        <h5>Food Places</h5>
        
        {resteraunts.map((placesForDay, dayIndex) => (
          <DestinationCard
            key={dayIndex}
            day={dayIndex + 1}
            places={
              placesForDay.length>0 ? placesForDay : [{name:"No"}]
            }
            //transport={transportPrice[dayIndex]}
          />
        ))}
      </div>
    </>
  );
}

export default EatDisplay;
