// // // // import React, { useState } from "react";
// // // // import TextField from "@mui/material/TextField";
// // // // import Slider from "@mui/material/Slider";
// // // // import Stay from "./Stay";
// // // // import Travel from "./Travel";
// // // // import Button from "@mui/material/Button";
// // // // import { Link } from "react-router-dom";

// // // // function BudgetPage() {
// // // //   return (
// // // //     <div className="container" style={{ margin: "50px" }}>
// // // //       <Stay />
// // // //       <Travel />
// // // //       <Link to="/itenary">
// // // //         <Button
// // // //           variant="contained"
// // // //           style={{
// // // //             height: "7vh",
// // // //             width: "9vw",
// // // //             marginLeft: "44%",
// // // //             marginTop: "5%",
// // // //             marginBottom: "5%",
// // // //             borderRadius:"2rem"
// // // //           }}
// // // //         >
// // // //           <p style={{fontFamily:"cursive"}}>Next</p>
// // // //         </Button>
// // // //       </Link>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default BudgetPage;


// // // import React from "react";
// // // import TextField from "@mui/material/TextField";
// // // import Slider from "@mui/material/Slider";
// // // import Stay from "./Stay";
// // // import Travel from "./Travel";
// // // import Button from "@mui/material/Button";
// // // import { Link } from "react-router-dom";
// // // import { motion } from "framer-motion"; // Import motion

// // // function BudgetPage() {
// // //   return (
// // //     <motion.div // Use motion.div instead of div
// // //       className="container"
// // //       style={{ margin: "50px" }}
// // //       initial={{ opacity: 0, y: 20 }} // Initial state: invisible, slightly below final position
// // //       animate={{ opacity: 1, y: 0 }}   // Animate to: fully visible, original position
// // //       transition={{ duration: 0.8, ease: "easeOut" }} // Animation duration and easing
// // //     >
// // //       <Stay />
// // //       <Travel />
// // //       <Link to="/itenary">
// // //         <Button
// // //           variant="contained"
// // //           style={{
// // //             height: "7vh",
// // //             width: "9vw",
// // //             marginLeft: "44%",
// // //             marginTop: "5%",
// // //             marginBottom: "5%",
// // //             borderRadius: "2rem"
// // //           }}
// // //         >
// // //           <p style={{ fontFamily: "cursive" }}>Next</p>
// // //         </Button>
// // //       </Link>
// // //     </motion.div>
// // //   );
// // // }

// // // export default BudgetPage;

// // import React, { useState, useEffect } from "react"; // Import useEffect
// // import TextField from "@mui/material/TextField";
// // import Slider from "@mui/material/Slider";
// // import Stay from "./Stay";
// // import Travel from "./Travel";
// // import Button from "@mui/material/Button";
// // import { Link } from "react-router-dom";

// // // Import your CSS file
// // import './BudgetPage.css'; // Create this file in the same directory

// // function BudgetPage() {
// //   const [isVisible, setIsVisible] = useState(false); // State to control visibility and animation

// //   useEffect(() => {
// //     // When the component mounts, set isVisible to true after a short delay
// //     // This allows the initial render to apply the 'hidden' state before animating
// //     const timer = setTimeout(() => {
// //       setIsVisible(true);
// //     }, 100); // Small delay to ensure CSS transition applies correctly

// //     return () => clearTimeout(timer); // Clean up the timer on unmount
// //   }, []); // Empty dependency array means this effect runs once on mount

// //   return (
// //     <div
// //       className={`container ${isVisible ? 'fade-in' : 'fade-out'}`} // Apply fade-in or fade-out class
// //       style={{ margin: "50px" }}
// //     >
// //       <Stay />
// //       <Travel />
// //       <Link to="/itenary">
// //         <Button
// //           variant="contained"
// //           style={{
// //             height: "7vh",
// //             width: "9vw",
// //             marginLeft: "44%",
// //             marginTop: "5%",
// //             marginBottom: "5%",
// //             borderRadius: "2rem"
// //           }}
// //         >
// //           <p style={{ fontFamily: "cursive" }}>Next</p>
// //         </Button>
// //       </Link>
// //     </div>
// //   );
// // }

// // export default BudgetPage;

// import React, { useState, useEffect } from "react";
// import TextField from "@mui/material/TextField";
// import Slider from "@mui/material/Slider";
// import Stay from "./Stay";
// import Travel from "./Travel";
// import Button from "@mui/material/Button";
// import { Link } from "react-router-dom";

// import './BudgetPage.css'; // Make sure this CSS file exists

// function BudgetPage() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsVisible(true);
//     }, 100); // Small delay to ensure CSS transition applies correctly

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div
//       className={`container ${isVisible ? 'slide-in-active' : 'slide-in-initial'}`} // Apply slide-in classes
//       style={{ margin: "50px" }}
//     >
//       <Stay />
//       <Travel />
//       <Link to="/itenary">
//         <Button
//           variant="contained"
//           style={{
//             height: "7vh",
//             width: "9vw",
//             marginLeft: "44%",
//             marginTop: "5%",
//             marginBottom: "5%",
//             borderRadius: "2rem"
//           }}
//         >
//           <p style={{ fontFamily: "cursive" }}>Next</p>
//         </Button>
//       </Link>
//     </div>
//   );
// }

// export default BudgetPage;

import React from "react";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";
import Stay from "./Stay";
import Travel from "./Travel";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion

function BudgetPage() {
  return (
    <motion.div
      className="container"
      style={{ margin: "50px" }}
      initial={{ opacity: 0, x: -100 }} // Start invisible and 100px to the left
      animate={{ opacity: 1, x: 0 }}    // Animate to fully visible and original position
      transition={{ duration: 0.8, ease: "easeOut" }} // Smooth animation
    >
      <Stay />
      <Travel />
      <Link to="/itenary">
        <Button
          variant="contained"
          style={{
            height: "7vh",
            width: "9vw",
            marginLeft: "44%",
            marginTop: "5%",
            marginBottom: "5%",
            borderRadius: "2rem"
          }}
        >
          <p style={{ fontFamily: "cursive" }}>Next</p>
        </Button>
      </Link>
    </motion.div>
  );
}

export default BudgetPage;