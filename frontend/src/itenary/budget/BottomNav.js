import * as React from "react";
import { useState } from "react";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import HotelCard from "./HotelCard.jsx";
import HostelCard from "./HostelCard.jsx";
import DormitoryCard from "./DormitoryCard.jsx";

export default function BottomNav({ stayPlace, type, onSelectHotel }) {
  const [isHovering, setIsHovering] = useState(false);

  // Effect to add/remove a class from the body
  React.useEffect(() => {
    if (isHovering) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isHovering]);

  const renderCard = (place) => {
    switch (type) {
      case "hotel":
        return (
          <HotelCard
            stayPlace={place}
            onClick={() => onSelectHotel(place._id)} // ⭐ KEY CHANGE
          />
        );

      case "hostel":
        return <HostelCard stayPlace={place} />;

      case "dorm":
        return <DormitoryCard stayPlace={place} />;

      default:
        return null;
    }
  };

  return (
    <Box sx={{ padding: 2 }}>
      <List
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        sx={{
          borderRadius: "16px",
          bgcolor: "transparent",
          marginTop: "20px",
          pt: "20px",
          maxHeight: "108vh",
          overflowY: "auto",

          "&::-webkit-scrollbar": { display: "none" },
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
        {stayPlace.map((place, index) => (
          <li
            key={place._id || index}
            style={{
              listStyle: "none",
              scrollSnapAlign: "start",
              height: "250px",
              marginBottom: "20px",
              marginTop: index === 0 ? "16px" : "0px",
              cursor: type === "hotel" ? "pointer" : "default",
            }}
          >
            {renderCard(place)}
          </li>
        ))}
      </List>
    </Box>
  );
}
