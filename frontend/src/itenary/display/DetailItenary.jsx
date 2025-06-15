import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const TravelItinerary = ({ places, hotels }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center mb-4">Your Travel Itinerary</h1>

      <section className="bg-white p-4 rounded-2xl shadow">
        <h2 className="text-xl font-semibold mb-2">Trip Summary</h2>
        <p>
          Embark on a journey through some of the most beautiful destinations. Here's a well-planned itinerary that includes your stay options and must-visit attractions to make your experience smooth and memorable.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Recommended Hotels</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {hotels.map((hotel, index) => (
            <Card key={index} className="rounded-2xl shadow-md">
              <CardContent className="p-4">
                <h3 className="text-lg font-bold">{hotel.name}</h3>
                <p className="text-sm text-gray-600">{hotel.address}</p>
                <p className="text-sm">Price: ₹{hotel.price}</p>
                <p className="text-sm">Rating: {hotel.rating}</p>
                <p className="text-sm">Amenities: {hotel.amenities.join(", ")}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Places to Visit</h2>
        <div className="space-y-4">
          {places.map((place, index) => (
            <Card key={index} className="rounded-2xl shadow-md">
              <CardContent className="p-4">
                <h3 className="text-lg font-bold">{place.name}</h3>
                <p className="text-sm text-gray-600">{place.description}</p>
                <p className="text-sm">Location: {place.location}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <div className="text-center mt-6">
        <Button className="rounded-xl px-6 py-2 text-lg">Download Itinerary</Button>
      </div>
    </div>
  );
};

export default TravelItinerary;