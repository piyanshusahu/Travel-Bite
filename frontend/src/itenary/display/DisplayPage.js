// import React from 'react';
// import { useLocation } from 'react-router-dom';

// function DisplayPage() {
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);

//   const src = queryParams.get('src');
//   const dest = queryParams.get('dest');
//   const no = queryParams.get('no');
//   const dep = queryParams.get('dep');
//   const ret = queryParams.get('ret');

//   return (
//     <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
//       <div className="info bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300">
//         <p className="text-lg font-semibold text-gray-800">
//           {`Trip from ${src} to ${dest}`}
//         </p>
//         <p className="text-md text-gray-600">Travelers: {no}</p>
//         <p className="text-md text-gray-600">Departure: {dep}</p>
//         <p className="text-md text-gray-600">Return: {ret}</p>
//       </div>
//       <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300">
//         <p className="text-lg font-semibold text-gray-800">Hotels</p>
//       </div>
//       <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300">
//         <p className="text-lg font-semibold text-gray-800">Rent</p>
//       </div>
//       <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300">
//         <p className="text-lg font-semibold text-gray-800">Visit</p>
//       </div>
//       <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300">
//         <p className="text-lg font-semibold text-gray-800">Food</p>
//       </div>
//     </div>
//   );
// }

// export default DisplayPage;

import React from "react";
import { useLocation } from "react-router-dom";
import "./DisplayPage.css";

function DisplayPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const src = queryParams.get("src");
  const dest = queryParams.get("dest");
  const no = queryParams.get("no");
  const dep = queryParams.get("dep");
  const ret = queryParams.get("ret");

  const depDate = new Date(dep);
  const retDate = new Date(ret);
  const timeDifferenceMs = retDate.getTime() - depDate.getTime();
  const days = Math.ceil(timeDifferenceMs / (1000 * 60 * 60 * 24));
  return (
    <>
      <div className="itenary">
        <div className="heading">
          <h1
            style={{
              marginLeft: "36%",
              fontWeight: "bold",
              fontFamily: "sans-serif",
              color: "rgb(40,75,100)",
              fontSize: "3.5rem",
            }}
          >
            TRAVEL ITENARY
          </h1>
        </div>
        <div
          className="heading-details flex"
          style={{
            marginLeft: "43%",
            fontSize: "1.2rem",
          }}
        >
          <div>
            <span style={{}}>TRIP DURATION: </span>
            <span style={{ fontWeight: "bold" }}>{days} DAYS</span>
          </div>
        </div>
        <div
          className=""
          style={{
            marginTop: "5%",
            marginBottom: "5%",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <div
            className=""
            style={{
              height: `${days * 15}vh`,
              width: "300px",
              backgroundColor: "rgb(0, 153, 204)",
            }}
          >
            <h5 style={{textAlign:"center"}}>DESTINATION</h5>
          </div>
          <div
            className=""
            style={{
              height: `${days * 15}vh`,
              width: "300px",
              backgroundColor: "rgb(82, 187, 85)",
            }}
          >
            <h5 style={{textAlign:"center"}}>EAT</h5>
          </div>
          <div
            className=""
            style={{
              height: `${days * 15}vh`,
              width: "300px",
              backgroundColor: "rgb(0, 153, 204)",
            }}
          >
            <h5 style={{textAlign:"center"}}>LEISURE</h5>
          </div>
          <div
            className=""
            style={{
              height: `${days * 15}vh`,
              width: "300px",
              backgroundColor: "rgb(82, 187, 85)",
            }}
          >
            <h5 style={{textAlign:"center"}}>TRANSPORTATION</h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default DisplayPage;
