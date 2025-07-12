import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Aos from "aos";
import axios from "axios";
import EatDisplay from "./EatDisplay";

function DestinationDisplay() {
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

  const depDate = new Date(dep);
  const retDate = new Date(ret);
  const timeDifferenceMs = retDate.getTime() - depDate.getTime();
  const days = Math.ceil(timeDifferenceMs / (1000 * 60 * 60 * 24));

  const [place, setPlace] = useState([]);
  //const [transportPrice, setTransportPrice] = useState([]);

  // async function findDistance(lat1, lon1, lat2, lon2, origin, destination) {
  //   const toRad = (x) => (x * Math.PI) / 180;
  //   const R = 6371; // Earth radius in km

  //   const dLat = toRad(lat2 - lat1);
  //   const dLon = toRad(lon2 - lon1);

  //   const a =
  //     Math.sin(dLat / 2) ** 2 +
  //     Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;

  //   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  //   //console.log(`${origin}-> ${R * c}`);
  //   return Math.ceil(R * c);
  // }
  useEffect(() => {
    Aos.init({ duration: 2000 });

    fetch("http://localhost:3002/getPlaces")
      .then((response) => response.json())
      .then(async (data) => {
        const filteredPlaces = data.filter((place) => place.city === dest);

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

        const sortedPlaces = [...filteredPlaces].sort((a, b) => {
          const [aOpen, aClose] = a.timings?.split("–") || ["", ""];
          const [bOpen, bClose] = b.timings?.split("–") || ["", ""];

          const aCloseTime = aClose ? convertToMinutes(aClose.trim()) : 1439;
          const bCloseTime = bClose ? convertToMinutes(bClose.trim()) : 1439;
          const [alat, alon] = a.location.coordinates;
          const [blat, blon] = b.location.coordinates;
          if (alat != blat && alon != blon) {
            return alat - blat;
          } else if (aCloseTime !== bCloseTime) {
            return aCloseTime - bCloseTime;
          }

          const aOpenTime = aOpen ? convertToMinutes(aOpen.trim()) : 0;
          const bOpenTime = bOpen ? convertToMinutes(bOpen.trim()) : 0;

          return aOpenTime - bOpenTime;
        });

        const placesPerDay = 3;
        console.log(sortedPlaces);
        //chunking based on distance with each other
        let ans = [];
        let chunk = [];
        for (let j = 0; j < sortedPlaces.length - 1; j++) {
          if (
            sortedPlaces[j].location.coordinates[0] -
              sortedPlaces[j + 1].location.coordinates[0] <=
              0.005 &&
            sortedPlaces[j].location.coordinates[1] -
              sortedPlaces[j + 1].location.coordinates[1] <=
              0.005 &&
            chunk.length < 3
          ) {
            chunk.push(sortedPlaces[j]);
          } else {
            if (chunk.length == 3) {
              j--;
            }
            ans.push(chunk);
            chunk = [];
          }
        }
        if (chunk.length != 0) ans.push(chunk);
        setPlace(ans);
        //console.log(place);
        let newPlace=[];
        if(place.length>days){

          for(let i=0;i<place.length-days;i++){
            newPlace.push(place[place.length-1]);
            newPlace[newPlace.length-1].push(place[place.length-2]);
          }
        }
        //await calculateDailyTransportCosts(chunkedPlaces);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [dest, days]);

  // const calculateDailyTransportCosts = async (chunkedPlaces) => {
  //   const dailyCosts = [];

  //   for (let day of chunkedPlaces) {
  //     let dayDistance = 0;
  //     for (let i = 0; i < day.length - 1; i++) {
  //       const origin = `${day[i].location.coordinates[0]},${day[i].location.coordinates[1]}`;
  //       const destination = `${day[i + 1].location.coordinates[0]},${
  //         day[i + 1].location.coordinates[1]
  //       }`;
  //       const dist = await findDistance(
  //         day[i].location.coordinates[0],
  //         day[i].location.coordinates[1],
  //         day[i + 1].location.coordinates[0],
  //         day[i + 1].location.coordinates[1],
  //         origin,
  //         destination
  //       );
  //       dayDistance += dist;
  //     }
  //     const cost = dayDistance * petrol_price;
  //     dailyCosts.push({
  //       cost: cost.toFixed(2),
  //       distance: dayDistance.toFixed(2),
  //     });
  //   }

  //   setTransportPrice(dailyCosts);
  // };
  const avgCoord = [];
  console.log("places", place);
  for (let i = 0; i < place.length; i++) {
    let s = 0;
    let avglat = 0;
    let avglon = 0;
    for (let j = 0; j < place[i].length; j++) {
      avglat += place[i][j].location.coordinates[0];
      avglon += place[i][j].location.coordinates[1];
    }
    avglat /= 3;
    avglon /= 3;
    //console.log(avglat + " " + avglon);
    avgCoord.push(avglat);
    avgCoord.push(avglon);
  }
  return (
    <>
      <div
        className="section-box"
        style={{
          backgroundColor: "rgb(0, 153, 204)",
          height: `8*${days}vh`,
          width: `5*${days}vw`,
        }}
      >
        <h5>Destination</h5>
        {place.map((placesForDay, dayIndex) => (
          <li key={dayIndex} className="day-item">
            Day {dayIndex + 1}:{" "}
            {placesForDay.length > 0
              ? placesForDay.map((p) => p.name).join(", ")
              : "No places"}
          </li>
        ))}
      </div>
      {/* Transport */}
      {/* <div
        className="section-box"
        style={{ backgroundColor: "rgb(82, 187, 85)", width: "200px" }}
      >
        <h5>Transport</h5>
        {transportPrice.length > 0 &&
          transportPrice.map((tp, index) => (
            <li key={index} className="day-item">
              Day {index + 1}: ₹{tp.cost} for {tp.distance} km
            </li>
          ))}
      </div> */}
      <EatDisplay avgCoord={avgCoord} />
    </>
  );
}

export default DestinationDisplay;
