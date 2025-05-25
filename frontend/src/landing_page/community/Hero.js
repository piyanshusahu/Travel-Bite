import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="">
      <div
        className="hero"
        style={{
          height: "500px",
          backgroundSize: "cover",
          backgroundImage: `url(${"./media/images/communityHeroImg.png"})`,
        }}
      >
        <div style={{ paddingTop: "150px", paddingLeft: "160px" }}>
          <h3
            style={{
              fontSize: "40px",
            }}
          >
            <i></i>
            See what other people suggests
          </h3>
          <input
            type="text"
            placeholder="Search about a destination"
            style={{ width: "300px", fontFamily: "cursive" }}
          ></input>
        </div>
      </div>
      <div
        className="community_login text-center"
        style={{
          height: "100px",
          backgroundColor: "#49759c",
        }}
      >
        <div style={{paddingTop:"10px"}}>
          <h5 style={{padding:"5px",color:"white",fontFamily:"cursive"}}>Join now and be a part of the wanderlust community</h5>
          <Link to="">
            <button
              style={{
                border: "1px solid black",
                height: "30px",
                width:"60px",
                marginRight:"20px",
                color:"white",
                backgroundColor:"blue"
              }}
            >
              Login
            </button>
          </Link>
          <Link to="">
            <button
              style={{
                border: "1px solid black",
                height: "30px",
                width:"80px",
                color:"white",
                backgroundColor:"grey"
              }}
            >
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
