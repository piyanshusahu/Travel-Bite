import React, { useState } from "react";
import "./DestinationCard.css";
import DestinationInfo from "./DestinationInfo";

function DestinationCard({ day, places, transport }) {
  const [expanded, setExpanded] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState(null);

  return (
    <div className="destination-card">
      <div className="destination-header">
        <h3>Day {day}</h3>
        <p className="transport-info">
          {transport
            ? `₹${transport.cost} for ${transport.distance} km`
            : "No transport data"}
        </p>
        <button
          className="toggle-button"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Hide" : "Show"} Places
        </button>
      </div>

      {expanded && (
        <div className="destination-places">
          {places.length > 0 ? (
            places.map((place, index) => (
              <div
                key={index}
                className="place-card"
                style={{ cursor: "pointer" }}
                onClick={() => setSelectedPlace(place)}
              >
                <h4>
                  {place.name !== "No" ? (
                    place.name
                  ) : (
                    <>
                      No suitable place found{" "}
                      <i className="fa-solid fa-face-sad-tear"></i>
                    </>
                  )}
                </h4>

                {place.name !== "No" && (
                  <>
                    <p className="place-type">{place.type || "Attraction"}</p>
                    <p className="timing">
                      {place.timings || "Timings not available"}
                    </p>
                  </>
                )}
              </div>
            ))
          ) : (
            <p>No places added for this day.</p>
          )}
        </div>
      )}

      {/* Modal / Info Dialog */}
      {selectedPlace && (
        <DestinationInfo
          place={selectedPlace}
          open={Boolean(selectedPlace)}
          onClose={() => setSelectedPlace(null)}
        />
      )}
    </div>
  );
}

export default DestinationCard;
