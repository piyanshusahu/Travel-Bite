import React, { useState } from "react";

function Cards({ name, img, desc }) {
  return (
    <div
      className="text-center"
      style={{
        height: "260px",
        width: "260px",
        border: "2px solid black",
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        boxShadow: "10px 10px 8px #888888",
      }}
    >
      <p
        style={{
          fontSize: "20px",
          border: "2px solid black",
          borderRadius: "5px",
          backgroundColor: "white",
          position: "relative",
          top: "100%",
          boxShadow: "10px 10px 8px #888888",
        }}
      >
        {name}
      </p>
    </div>
  );
}

export default Cards;
