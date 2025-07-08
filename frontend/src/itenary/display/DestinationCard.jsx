import React, { useState } from "react";
import "./DestinationCard.css"; 

function DestinationCard({ day, places, transport }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="destination-card">
      <div className="destination-header">
        <h3>Day {day}</h3>
        <p className="transport-info">
          {transport ? `₹${transport.cost} for ${transport.distance} km` : "No transport data"}
        </p>
        <button className="toggle-button" onClick={() => setExpanded(!expanded)}>
          {expanded ? "Hide" : "Show"} Places
        </button>
      </div>

      {expanded && (
        <div className="destination-places">
          {places.length > 0 ? (
            places.map((place, index) => (
              <div key={index} className="place-card">
                <h4>{place.name}</h4>
                <p className="place-type">{place.type || "Attraction"}</p>
                <p className="timing">{place.timings || "Timings not available"}</p>
              </div>
            ))
          ) : (
            <p>No places added for this day.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default DestinationCard;