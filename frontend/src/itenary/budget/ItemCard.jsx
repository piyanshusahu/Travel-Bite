import React from "react";

function ItemCard({ img, onClick }) {
  return (
    <div
      style={{
        cursor: "pointer",
        height: "43vh",
        border:"1px solid black",
        width: "20vw",
        borderRadius: "2rem",
        backgroundImage: `url(${img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "0.2s ease-in",
      }}
      onClick={onClick}
      onMouseEnter={(e) => (e.target.style.transform = "scale(1.02)")}
      onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
    ></div>
  );
}

export default ItemCard;
