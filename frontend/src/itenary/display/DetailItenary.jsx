import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

function SeasonCategory() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <div className="seasons" style={{ background: "linear-gradient(lightblue,#4f42b5,#008080,#739BD0,#89CFF0)" }}>
      <div className="container" style={{ marginTop: "100px", padding: "20px" }}>

        {/* Summer */}
        <div className="row" style={{ display: "flex", alignItems: "center", margin: "20px" }} data-aos="fade-up">
          <div className="col-4" data-aos="fade-right">
          </div>
          <div className="col-8" data-aos="fade-left">
            <h6 style={{ color: "white", fontSize: "17px" }}>
                Welcome to your destination! Upon arrival, check in at your hotel by your preferred check-in time and settle into your room. Start your trip with a delicious breakfast at a local spot, offering a range of regional dishes. Once refreshed, begin your sightseeing with a visit to a popular landmark in the area, known for its unique charm. Continue to your second attraction around late morning or early afternoon, where you can enjoy the surroundings and take in the highlights. After a satisfying lunch at a nearby restaurant, spend your afternoon relaxing or exploring on foot. In the evening, unwind with a leisure activity or cultural experience, followed by a delightful dinner at a recommended restaurant. Return to the hotel to rest and prepare for the next day.
              <br />
              <Link style={{ color: "darkblue", fontSize: "17px" }} to="./summer">Read More</Link>
            </h6>
          </div>
        </div>

        {/* Monsoon */}
        <div className="row" style={{ display: "flex", alignItems: "center", margin: "20px" }} data-aos="fade-up">
          <div className="col-8" data-aos="fade-right">
            <h6 style={{ color: "white", fontSize: "17px" }}>
              🗓️ Day 2: Culture & Nature
Day 2 begins with a warm breakfast featuring a variety of regional items. Your cultural journey starts with a visit to a historical or cultural site, best known for its architecture, heritage, or significance. After that, head to a natural attraction such as a park, lake, or hilltop view that provides a peaceful setting. Enjoy lunch at a cozy eatery offering authentic local flavors. The afternoon offers time for casual exploration, photography, or a short guided tour of local neighborhoods. As the sun sets, head to a scenic location or evening event for a memorable experience, followed by dinner at a spot known for its ambience and cuisine. Head back to the hotel for a relaxing night.
              <br />
              <Link style={{ color: "darkblue", fontSize: "17px" }} to="./monsoon">Read More</Link>
            </h6>
          </div>
          <div className="col-4" data-aos="fade-left">
           
          </div>
        </div>

        {/* Autumn */}
        <div className="row" style={{ display: "flex", alignItems: "center", margin: "20px" }} data-aos="fade-up">
          <div className="col-4" data-aos="fade-right">
            
          </div>
          <div className="col-8" data-aos="fade-left">
            <h6 style={{ color: "white", fontSize: "17px" }}>
              🗓️ Day 3: Adventure & Shopping
Fuel up with breakfast, then prepare for a morning of adventure. Begin with an activity like boating, trekking, biking, or visiting a theme or nature park. Around midday, head to your next experience—perhaps an art gallery, market, or viewpoint that offers a change of pace. Enjoy lunch at a restaurant that serves your preferred cuisine. In the afternoon, take time to shop at local markets, bazaars, or malls, where you can pick up souvenirs and explore local crafts. In the evening, enjoy a performance, a local festivity, or simply relax with music and food at a cozy location. End your day with a well-deserved dinner before returning to your hotel.
              <br />
              <Link style={{ color: "darkblue", fontSize: "17px" }} to="./autumn">Read More</Link>
            </h6>
          </div>
        </div>

        {/* Winter */}
        <div className="row mt-5 mb-5" style={{ display: "flex", alignItems: "center", margin: "20px" }} data-aos="fade-up">
          <div className="col-8" data-aos="fade-right">
            <h6 style={{ color: "white", fontSize: "17px" }}>
              🗓️ Day 4: Relaxation & Departure
Start your final day with a peaceful breakfast, featuring light and fresh items. If time permits, fit in a final short visit to a garden, beach, museum, or any relaxing spot before checking out. Complete your hotel checkout procedures and get ready for your return journey. If you have time before your departure, enjoy a light lunch or coffee at a nearby café. Head to the airport, railway station, or your next destination with wonderful memories and a refreshed spirit.
              <br />
              <Link style={{ color: "darkblue", fontSize: "17px" }} to="./winter">Read More</Link>
            </h6>
          </div>
          <div className="col-4" data-aos="fade-left">
            
          </div>
        </div>

        {/* Spring */}
        <div className="row" style={{ display: "flex", alignItems: "center", marginLeft: "20px" }} data-aos="fade-up">
          <div className="col-4" style={{ height: "330px" }} data-aos="fade-right">
            
          </div>
          <div className="col-8" data-aos="fade-left">
            <h6 style={{ color: "white", fontSize: "17px" }}>
              Spring in India is a transition period, where the weather becomes
              mild, and the environment blooms with vibrant flowers and fresh
              greenery. This season is ideal for exploring various parts of
              India as temperatures are not yet too high and the landscapes are
              pleasant.
              <br />
              <Link style={{ color: "darkblue", fontSize: "17px" }} to="./spring">Read More</Link>
            </h6>
          </div>
        </div>

      </div>
    </div>
  );
}

export default SeasonCategory;
