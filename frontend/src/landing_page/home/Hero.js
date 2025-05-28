import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLeft } from "@fortawesome/free-solid-svg-icons";
import "./Hero.scss";
import video2 from "./video2.mp4";
import { GrLocation } from "react-icons/gr";
import { FaSearch } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { useNavigate, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Aos from "aos";
import "aos/dist/aos.css";

function Hero() {
  const navigate=useNavigate();
  const today = new Date().toISOString().split("T")[0];
  const [departureDate, setDepartureDate] = useState(today);
  const [src, setSrc] = useState("");
  const [tempSrc, setTempSrc] = useState("");
  const [dest, setDest] = useState("");
  const [tempDest, setTempDest] = useState("");
  const [number, setNumber] = useState(1);
  const [depDate, setDepDate] = useState("");
  const [retDate, setRetDate] = useState("");
  const [isSrcDropdownVisible, setIsSrcDropdownVisible] = useState(false);
  const [isDestDropdownVisible, setIsDestDropdownVisible] = useState(false);
  const [city, setCity] = useState([]);
  const srcInputRef = useRef(null);
  const destInputRef = useRef(null);
  const srcDropdownRef = useRef(null);
  const destDropdownRef = useRef(null);
  const [isSearchActive, setIsSearchActive] = useState(false);

  
  useEffect(() => {
    Aos.init({ duration: 2000 });

    fetch("http://localhost:3002/getCities")
      .then((response) => response.json())
      .then((data) => {
        const cityNames = data.map((city) => city.name);
        setCity(cityNames);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    setIsSearchActive(
      src.trim() !== "" &&
        dest.trim() !== "" &&
        number > 0 &&
        depDate !== "" &&
        retDate !== ""&&
        depDate>=today&&
        retDate>=depDate
    );
  }, [src, dest, number, depDate, retDate]);

  function handleToggle() {
    if (src || dest) {
      setSrc(dest);
      setDest(src);
      setTempSrc(dest);
      setTempDest(src);
    }
  }
  function setSrcDropdown() {
    setIsSrcDropdownVisible(true);
    setIsDestDropdownVisible(false);
  }
  function setDestDropdown() {
    setIsDestDropdownVisible(true);
    setIsSrcDropdownVisible(false);
  }

  const handleSrcChange = (e) => {
    setSrc(e.target.value);
    setTempSrc(e.target.value);
  };

  const handleDestChange = (e) => {
    setDest(e.target.value);
    setTempDest(e.target.value);
  };

  const handleSrcSelect = (item) => {
    setSrc(item);
    setTempSrc(item);
    setIsSrcDropdownVisible(false);
  };
  const handleDestSelect = (item) => {
    setDest(item);
    setTempDest(item);
    setIsDestDropdownVisible(false);
  };

  const handleNext = () => {
    if (isSearchActive) {
      navigate(
        `/budget?src=${encodeURIComponent(src)}&dest=${encodeURIComponent(
          dest
        )}&no=${encodeURIComponent(number)}&dep=${encodeURIComponent(
          depDate
        )}&ret=${encodeURIComponent(retDate)}`
      );
    } else {
      console.log("Please fill in all the information.");
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isSrcDropdownVisible &&
        srcDropdownRef.current &&
        !srcDropdownRef.current.contains(event.target) &&
        event.target !== srcInputRef.current
      ) {
        setSrc("");
        setIsSrcDropdownVisible(false);
      }

      if (
        isDestDropdownVisible &&
        destDropdownRef.current &&
        !destDropdownRef.current.contains(event.target) &&
        event.target !== destInputRef.current
      ) {
        setDest("");
        setIsDestDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [
    isSrcDropdownVisible,
    isDestDropdownVisible,
    srcInputRef,
    destInputRef,
    srcDropdownRef,
    destDropdownRef,
  ]);

  return (
    <section className="home">
      <div className="videoContainer">
        <video src={video2} muted autoPlay loop type="video/mp4"></video>
        <div className="overlay"></div> {/* <-- Keep your original overlay */}
        <div className="videoFade"></div> {/* <-- Add new fade for bottom */}
      </div>

      <div className="homeContent container">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">
            Our Packages
          </span>
          <h1 data-aos="fade-up" className="homeTitle">
            Search your Holiday
          </h1>
        </div>

        <div data-aos="fade-up" className="cardDiv grid">
          <div className="destinationInput" style={{ position: "relative" }}>
            <label
              htmlFor="city"
              style={{ marginBottom: "0", paddingBottom: "0" }}
            >
              Search your Location
            </label>
            <div className="input flex">
              <input
                value={src}
                onChange={handleSrcChange}
                type="text"
                placeholder="From..."
                onClick={setSrcDropdown}
                autoComplete="off"
                ref={srcInputRef}
              />
              <GrLocation className="icon" />
            </div>

            {isSrcDropdownVisible &&
              (src ?? "").trim() !== "" &&
              (() => {
                const filteredCities = city.filter(
                  (item) =>
                    item.toLowerCase().startsWith(src.toLowerCase()) &&
                    item !== dest
                );
                return (
                  <ul
                    ref={srcDropdownRef}
                    style={{
                      listStyle: "none",
                      color: "black",
                      margin: 0,
                      padding: "0",
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                      position: "absolute",
                      backgroundColor: "white",
                      zIndex: 100,
                      borderTopLeftRadius: "0",
                      borderTopRightRadius: "0",
                      borderBottomLeftRadius: "10px",
                      borderBottomRightRadius: "10px",
                      top: "100%",
                      left: "0",
                      width: "100%",
                      maxHeight: "150px",
                      overflowY: "auto",
                    }}
                  >
                    {filteredCities.map((item, index) => (
                      <li
                        key={index}
                        onClick={() => handleSrcSelect(item)}
                        style={{
                          padding: "10px",
                          cursor: "pointer",
                          borderBottom:
                            index < filteredCities.length - 1
                              ? "1px solid #eee"
                              : "none",
                        }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              })()}
          </div>

          {/* Swap Button */}
          <div
            className="toggle"
            style={{
              border: "1px solid black",
              borderRadius: "50px",
              height: "50px",
              width: "50px",
              marginLeft: "170px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
              color: "black",
              cursor:"pointer"
            }}
            onClick={handleToggle}
          >
            <span>
              <FontAwesomeIcon icon={faRightLeft} />
            </span>
          </div>

          {/* Destination Input */}
          <div className="destinationInput" style={{ position: "relative" }}>
            <label htmlFor="city">Search your Destination</label>
            <div className="input flex">
              <input
                value={dest}
                onChange={handleDestChange}
                type="text"
                placeholder="To..."
                onClick={setDestDropdown}
                ref={destInputRef}
                autoComplete="off"
              />
              <GrLocation className="icon" />
            </div>

            {isDestDropdownVisible && (dest ?? "").trim() !== "" && (
              <ul
                ref={destDropdownRef}
                style={{
                  listStyle: "none",
                  color: "black",
                  margin: 0,
                  padding: "0",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  position: "absolute",
                  backgroundColor: "white",
                  zIndex: 100,
                  top: "calc(100% - 1px)",
                  left: 0,
                  width: "100%",
                  maxHeight: "150px",
                  overflowY: "auto",
                }}
              >
                {city
                  .filter(
                    (item) =>
                      item.toLowerCase().includes(dest.toLowerCase()) &&
                      item !== src
                  )
                  .map((item, index) => (
                    <li
                      key={index}
                      onClick={() => handleDestSelect(item)}
                      style={{
                        padding: "10px",
                        cursor: "pointer",
                        borderBottom: "1px solid #eee",
                      }}
                    >
                      {item}
                    </li>
                  ))}
              </ul>
            )}
          </div>

          {/* Travellers Input */}
          <div className="dateInput">
            <label htmlFor="city">Number of Travellers</label>
            <div className="input flex">
              <input
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                type="number"
                placeholder="Travellers"
              />
              <IoIosPeople className="icon" />
            </div>
          </div>

          {/* Departure Date */}
          <div className="dateInput">
            <label htmlFor="city">Departure Date</label>
            <div className="input flex">
              <input
                type="date"
                id="departure"
                min={today}
                value={depDate}
                onChange={(e) => setDepDate(e.target.value)}
              />
            </div>
          </div>

          {/* Return Date */}
          <div className="dateInput">
            <label htmlFor="city">Return Date</label>
            <div className="input flex">
              <input
                value={retDate}
                onChange={(e) => setRetDate(e.target.value)}
                min={depDate}
                type="date"
              />
            </div>
          </div>

          {/* Search Button */}
          <div
            onClick={handleNext}
            className={`searchOptions flex`}
            style={{
              opacity: isSearchActive ? 1 : 0.9,
              cursor: isSearchActive ? "pointer" : "not-allowed",
              // pointerEvents: isSearchActive ? "auto" : "none",
            }}
          >
            <FaSearch className="icon" />
            <Link
              to={isSearchActive ? "./budget" : "#"}
              style={{ pointerEvents: isSearchActive ? "auto" : "none" }}
            >
              <span style={{ color: "white" }}>Search</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
