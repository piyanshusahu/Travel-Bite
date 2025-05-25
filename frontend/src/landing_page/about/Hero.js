import React from "react";

function Hero() {
  return (
    <div className="about" style={{ backgroundColor: "azure" }}>
      <div className="row">
        <div className="col" 
        //style={{ height: "900px", width: "700px" }}
        >
          <img
            src="./media/images/about.png"
            style={{ width: "102%", height: "100%" }}
          ></img>
        </div>
        <div className="col" style={{ marginTop: "40px" }}>
          <h4
            className="text-center"
            style={{ fontFamily: "Poppins, sans-serif", fontSize: "30px" }}
          >
            "Your Journey, Your Way"
            <br /> Travel Plans Tailored to You!
          </h4>
          <p className="" style={{ fontSize: "15px", fontFamily: "cursive" }}>
            Welcome to Travel BIte, where we believe every journey should be as
            unique as the traveler
            <br /> taking it. Our mission is simple: to make travel planning
            effortless, personalized, and fun. At <br />
            Travel BIte, we specialize in creating tailor-made itineraries that
            align with your preferences,
            <br /> interests, and flexibility. Whether you're a meticulous
            planner or a spontaneous adventurer, <br />
            our smart technology and expert insights adapt to your schedule and
            priorities, curating experiences <br /> that are truly your own. Why
            settle for cookie-cutter travel plans when you can have an itinerary{" "}
            <br /> designed specifically for you? From hidden gems and local
            favorites to must-see landmarks, we
            <br /> combine your input with our expertise to craft the perfect
            journey—one that fits your timeline and maximizes every moment. Join
            us, and let’s make travel planning as enjoyable as the trip itself.
            <br />
            Because life is too short for boring vacations!
          </p>
          <p className="" style={{ fontSize: "15px", fontFamily: "cursive" }}>
            What sets us apart is the flexibility that we provide the user to
            form his travel itenary. The user can flexibly chose his budget and
            accordingly is shown the best possible travel memo or can make
            changes in the travel memo to get an acoordingly change in the
            travel budget.
          </p>
          <h5 style={{ fontFamily: "cursive" }}>How it works?</h5>
          <p style={{ fontFamily: "cursive" }}>
            <ul>
              <li>
                We ask the user about the source,destination,dates,number of
                travellers from the user
              </li>
              <li>
                We ask the user for their budget and individual budgets for an
                ease of making the best possible itenary
              </li>
              <li>
                We also give the user an option to check and select the
                hot-spots of the particular destination
              </li>
              <li>
                Then our software helps to create a full fledged itneary for the
                user's trip including the hotels user can stay in,resteraunts
                the user can eat in,mode of transport they can choose,the route
                they can follow,etc
              </li>
              <li>
                Another unique feature our website holds is to modify their
                routes accroding to their personal choices and the change in the
                prices will be reflected accordingly.
              </li>
              <li>
                We also provide some pre-defined itenaries which has fixed
                percentages of splits in the total budget according the type of
                trip the user is going to have.
              </li>
              <li>
                We have also set up a community page to help the new users to
                take up some ideas from the previous trips as posted by past
                users
              </li>
            </ul>
          </p>
          
        </div>
      </div>
    </div>
  );
}

export default Hero;
