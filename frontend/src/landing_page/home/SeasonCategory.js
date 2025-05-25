// import React from "react";
// import Cards from "./Cards.js";
// import { Link } from "react-router-dom";


// function SeasonCategory() {
//   return (
//     <div className="seasons" style={{background:"linear-gradient(lightblue,#4f42b5,#008080,#739BD0,#89CFF0)"}}>
//       <div
//         className="container"
//         style={{marginTop: "100px" ,padding:"20px"}}
//       >
//         <div
//           className="row"
//           style={{ display: "flex", alignItems: "center", margin: "20px" }}
//         >
//           <div className="col-4">
//             <Cards name="Summer" img="./media/images/summer.jpg" />
//           </div>
//           <div className="col-8">
//             <h6 style={{ color:"white",fontSize:"17px"}}>
//               Summer can be hot and dry in much of India, but there are several
//               places where the temperatures remain moderate, making them perfect
//               for a summer escape.
//               <br />
//               <Link style={{color:"darkblue", fontSize:"17px"}} to="./summer">Read More</Link>
//             </h6>
//           </div>
          
//         </div>
//         <div
//           className="row"
//           style={{ display: "flex", alignItems: "center", margin: "20px" }}
//         >
//           <div className="col-8">
//             <h6 style={{ color:"white",fontSize:"17px"}}>
//               After the monsoon rains subside, India experiences a rejuvenated
//               landscape, making it an excellent time to travel before the winter
//               crowds arrive.
//               <br />
//               <Link style={{ color:"darkblue",fontSize:"17px"}} to="./monsoon">Read More</Link>
//             </h6>
//           </div>
//           <div className="col-4">
//             <Cards name="Monsoon" img="./media/images/monsoon.jpg" />
//           </div>
//         </div>
//         <div
//           className="row"
//           style={{ display: "flex", alignItems: "center", margin: "20px" }}
//         >
//           <div className="col-4">
//             <Cards name="Autumn" img="./media/images/autumn.jpg" />
//           </div>
//           <div className="col-8">
//             <h6 style={{ color:"white",fontSize:"17px"}}>
//               After the monsoon rains subside, India experiences a rejuvenated
//               landscape, making it an excellent time to travel before the winter
//               crowds arrive.
//               <br />
//               <Link style={{ color:"darkblue",fontSize:"17px"}} to="./autumn">Read More</Link>
//             </h6>
//           </div>
//         </div>
//         <div
//           className="row mt-5 mb-5"
//           style={{ display: "flex", alignItems: "center", margin: "20px" }}
//         >
//           <div className="col-8">
//             <h6 style={{ color:"white",fontSize:"17px"}}>
//               Winter is the peak tourist season in India, with cool weather
//               across most of the country, making it ideal for sightseeing and
//               outdoor activities.
//               <br />
//               <Link style={{ color:"darkblue",fontSize:"17px"}} to="./winter">Read More</Link>
//             </h6>
//           </div>
//           <div className="col-4">
//             <Cards name="Winter" img="./media/images/winter.jpg" />
//           </div>
//         </div>
//         <div
//           className="row"
//           style={{ display: "flex", alignItems: "center", marginLeft: "20px"}}
//         >
//           <div className="col-4" style={{height:"330px"}}>
//             <Cards name="Spring" img="./media/images/spring.jpg" />
//           </div>
//           <div className="col-8">
//             <h6 style={{color:"white", fontSize:"17px"}}>
//               Spring in India is a transition period, where the weather becomes
//               mild, and the environment blooms with vibrant flowers and fresh
//               greenery. This season is ideal for exploring various parts of
//               India as temperatures are not yet too high and the landscapes are
//               pleasant.
//               <br />
//               <Link style={{ color:"darkblue",fontSize:"17px"}} to="./spring">Read More</Link>
//             </h6>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SeasonCategory;


import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Cards from './Cards'; // Ensure this import matches your project structure

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
            <Cards name="Summer" img="./media/images/summer.jpg" />
          </div>
          <div className="col-8" data-aos="fade-left">
            <h6 style={{ color: "white", fontSize: "17px" }}>
              Summer can be hot and dry in much of India, but there are several
              places where the temperatures remain moderate, making them perfect
              for a summer escape.
              <br />
              <Link style={{ color: "darkblue", fontSize: "17px" }} to="./summer">Read More</Link>
            </h6>
          </div>
        </div>

        {/* Monsoon */}
        <div className="row" style={{ display: "flex", alignItems: "center", margin: "20px" }} data-aos="fade-up">
          <div className="col-8" data-aos="fade-right">
            <h6 style={{ color: "white", fontSize: "17px" }}>
              After the monsoon rains subside, India experiences a rejuvenated
              landscape, making it an excellent time to travel before the winter
              crowds arrive.
              <br />
              <Link style={{ color: "darkblue", fontSize: "17px" }} to="./monsoon">Read More</Link>
            </h6>
          </div>
          <div className="col-4" data-aos="fade-left">
            <Cards name="Monsoon" img="./media/images/monsoon.jpg" />
          </div>
        </div>

        {/* Autumn */}
        <div className="row" style={{ display: "flex", alignItems: "center", margin: "20px" }} data-aos="fade-up">
          <div className="col-4" data-aos="fade-right">
            <Cards name="Autumn" img="./media/images/autumn.jpg" />
          </div>
          <div className="col-8" data-aos="fade-left">
            <h6 style={{ color: "white", fontSize: "17px" }}>
              After the monsoon rains subside, India experiences a rejuvenated
              landscape, making it an excellent time to travel before the winter
              crowds arrive.
              <br />
              <Link style={{ color: "darkblue", fontSize: "17px" }} to="./autumn">Read More</Link>
            </h6>
          </div>
        </div>

        {/* Winter */}
        <div className="row mt-5 mb-5" style={{ display: "flex", alignItems: "center", margin: "20px" }} data-aos="fade-up">
          <div className="col-8" data-aos="fade-right">
            <h6 style={{ color: "white", fontSize: "17px" }}>
              Winter is the peak tourist season in India, with cool weather
              across most of the country, making it ideal for sightseeing and
              outdoor activities.
              <br />
              <Link style={{ color: "darkblue", fontSize: "17px" }} to="./winter">Read More</Link>
            </h6>
          </div>
          <div className="col-4" data-aos="fade-left">
            <Cards name="Winter" img="./media/images/winter.jpg" />
          </div>
        </div>

        {/* Spring */}
        <div className="row" style={{ display: "flex", alignItems: "center", marginLeft: "20px" }} data-aos="fade-up">
          <div className="col-4" style={{ height: "330px" }} data-aos="fade-right">
            <Cards name="Spring" img="./media/images/spring.jpg" />
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
