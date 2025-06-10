import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./DisplayPage.css";
import Button from "@mui/material/Button";
import DetailItenary from "./DetailItenary";
import Aos from "aos";

function DisplayPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const [displayDetail, setDisplayDetail] = useState(false);
  const [place, setPlace] = useState([]);
  const [resteraunt, setResteraunt] = useState([]);

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

  useEffect(() => {
    Aos.init({ duration: 2000 });

    fetch("http://localhost:3002/getPlaces")
      .then((response) => response.json())
      .then((data) => {
        const filteredPlaces = data.filter((place) => place.city === dest);

        const placesPerDay = 3;
        const chunkedPlaces = Array.from({ length: days }, (_, dayIndex) =>
          filteredPlaces.slice(dayIndex * placesPerDay, (dayIndex + 1) * placesPerDay)
        );

        setPlace(chunkedPlaces);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [dest, days]);

  // useEffect(() => {
  //   Aos.init({ duration: 2000 });

  //   fetch("http://localhost:3002/getResteraunts")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const filteredPlaces = data.filter((resteraunt) => resteraunt.city === dest);

  //       const placesPerDay = 3;
  //       const chunkedPlaces = Array.from({ length: days }, (_, dayIndex) =>
  //         filteredPlaces.slice(dayIndex * placesPerDay, (dayIndex + 1) * placesPerDay)
  //       );

  //       setResteraunt(chunkedPlaces);
  //     })
  //     .catch((error) => console.error("Error fetching data:", error));
  // }, [dest, days]);

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
            TRAVEL ITENARY
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
            marginTop: "5%",
            marginBottom: "5%",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          {/* DESTINATION Section */}
          <div
            style={{
              height: `${days * 20}vh`,
              width: "300px",
              backgroundColor: "rgb(0, 153, 204)",
              borderRadius: "2rem",
            }}
          >
            <h5 style={{ marginTop: "4%", textAlign: "center", fontFamily: "sans-serif" }}>
              Destination
            </h5>
            {place.map((placesForDay, dayIndex) => (
              <li
                key={dayIndex}
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  paddingLeft: "10%",
                  fontFamily: "cursive",
                  marginBottom: "10%",
                  marginTop: "15%",
                }}
                className="day-item"
              >
                Day {dayIndex + 1}:
                {placesForDay.length > 0
                  ? placesForDay.map((p) => p.name).join(", ")
                  : "No places"}
              </li>
            ))}
          </div>
          {/* Eat Section */}
          <div
            style={{
              height: `${days * 20}vh`,
              width: "300px",
              backgroundColor: "rgb(82, 187, 85)",
              borderRadius: "2rem",
            }}
          >
            <h5 style={{ marginTop: "4%", textAlign: "center", fontFamily: "sans-serif" }}>
              Eat
            </h5>
            {resteraunt.map((placesForDay, dayIndex) => (
              <li
                key={dayIndex}
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  paddingLeft: "10%",
                  fontFamily: "cursive",
                  marginBottom: "10%",
                  marginTop: "15%",
                }}
                className="day-item"
              >
                Day {dayIndex + 1}:
                {placesForDay.length > 0
                  ? placesForDay.map((p) => p.name).join(", ")
                  : "No places"}
              </li>
            ))}
          </div>

          {/* Other Sections with just Day labels */}
          {[ "Leisure", "Transport"].map((section, i) => (
            <div
              key={section}
              style={{
                height: `${days * 20}vh`,
                width: "300px",
                backgroundColor: i % 2 === 0 ? "rgb(82, 187, 85)" : "rgb(0, 153, 204)",
                borderRadius: "2rem",
              }}
            >
              <h5 style={{ marginTop: "4%", textAlign: "center", fontFamily: "sans-serif" }}>
                {section}
              </h5>
              {dayItems.map((dayNumber) => (
                <li
                  key={dayNumber}
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: "bold",
                    paddingLeft: "10%",
                    fontFamily: "cursive",
                    marginBottom: "10%",
                    marginTop: "15%",
                  }}
                  className="day-item"
                >
                  Day {dayNumber}
                </li>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="detail flex" style={{ justifyContent: "center", marginBottom: "3%" }}>
        <Button
          variant="contained"
          style={{
            height: "7vh",
            width: "13vw",
            borderRadius: "2rem",
            fontFamily: "cursive",
            fontWeight: "bold",
            fontSize: "1rem",
          }}
          onClick={handleDetail}
        >
          Show in Detail
        </Button>
        {displayDetail && <DetailItenary />}
      </div>
    </>
  );
}

export default DisplayPage;
