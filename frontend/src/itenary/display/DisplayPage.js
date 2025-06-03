import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./DisplayPage.css";
import Button from "@mui/material/Button";
import DetailItenary from "./DetailItenary";

function DisplayPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [displayDetail, setDisplayDetail] = useState(false);

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
          style={{
            marginLeft: "43%",
            fontSize: "1.2rem",
          }}
        >
          <div>
            <span style={{}}>TRIP DURATION: </span>
            <span style={{ fontWeight: "bold" }}>{days} DAYS</span>
          </div>
        </div>
        <div
          className=""
          style={{
            marginTop: "5%",
            marginBottom: "5%",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <div
            className=""
            style={{
              height: `${days * 15}vh`,
              width: "300px",
              backgroundColor: "rgb(0, 153, 204)",
              borderRadius: "10rem",
            }}
          >
            <h5
              style={{
                marginTop: "4%",
                textAlign: "center",
                fontFamily: "sans-serif",
              }}
            >
              Destination
            </h5>
            {dayItems.map((dayNumber) => (
              <li
                style={{
                  fontSize: "1.3rem",
                  fontWeight: "bold",
                  paddingLeft: "10%",
                  fontFamily: "cursive",
                  marginBottom: "10%",
                  marginTop: "15%",
                }}
                key={dayNumber}
                className="day-item"
              >
                Day {dayNumber}
              </li>
            ))}
          </div>
          <div
            className=""
            style={{
              height: `${days * 15}vh`,
              width: "300px",
              backgroundColor: "rgb(82, 187, 85)",
              borderRadius: "10rem",
            }}
          >
            <h5 style={{marginTop: "4%", textAlign: "center", fontFamily: "sans-serif" }}>
              Eat
            </h5>
            {dayItems.map((dayNumber) => (
              <li
                style={{
                  fontSize: "1.3rem",
                  fontWeight: "bold",
                  paddingLeft: "10%",
                  fontFamily: "cursive",
                  marginBottom: "10%",
                  marginTop: "15%",
                }}
                key={dayNumber}
                className="day-item"
              >
                Day {dayNumber}
              </li>
            ))}
          </div>
          <div
            className=""
            style={{
              height: `${days * 15}vh`,
              width: "300px",
              backgroundColor: "rgb(0, 153, 204)",
              borderRadius: "10rem",
            }}
          >
            <h5 style={{marginTop: "4%", textAlign: "center", fontFamily: "sans-serif" }}>
              Leisure
            </h5>
            {dayItems.map((dayNumber) => (
              <li
                style={{
                  fontSize: "1.3rem",
                  fontWeight: "bold",
                  paddingLeft: "10%",
                  fontFamily: "cursive",
                  marginBottom: "10%",
                  marginTop: "15%",
                }}
                key={dayNumber}
                className="day-item"
              >
                Day {dayNumber}
              </li>
            ))}
          </div>
          <div
            className=""
            style={{
              height: `${days * 15}vh`,
              width: "300px",
              backgroundColor: "rgb(82, 187, 85)",
              borderRadius: "10rem",
            }}
          >
            <h4 style={{ marginTop: "4%",textAlign: "center", fontFamily: "sans-serif" }}>
              Transport
            </h4>
            {dayItems.map((dayNumber) => (
              <li
                style={{
                  fontSize: "1.3rem",
                  fontWeight: "bold",
                  paddingLeft: "10%",
                  fontFamily: "cursive",
                  marginBottom: "10%",
                  marginTop: "15%",
                }}
                key={dayNumber}
                className="day-item"
              >
                Day {dayNumber}
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
