// import { Link } from "react-router-dom";
// import "./Footer.css";
// import {animateScroll} from "react-scroll";
// import { FaFacebook } from "react-icons/fa";
// import { FaWhatsapp } from "react-icons/fa6";
// import { FaInstagram } from "react-icons/fa6";
// import { FaTwitter } from "react-icons/fa6";
// import { FaGoogle } from "react-icons/fa6";
// import { useState } from "react";
// import { FaRegCopyright } from "react-icons/fa6";
// import { FaPhoneAlt } from "react-icons/fa";
// import { IoIosMail } from "react-icons/io";
// import axios from "axios";

// function Footer() {

// const addHotels = async () => {
//   try {
//     const response = await axios.get("http://localhost:3002/add");
//     console.log(response.data);
//   } catch (error) {
//     console.error("Error adding hotels:", error);
//   }
// };

// // Call this function when a button is clicked


//   return (
    
//     <div className="footer">
//       <div
//         className="footer_signup mb-3"
//         style={{
//           backgroundColor: "#1E2832",
//           display: "flex",
//           justifyContent: "center",
//         }}
//       >
//         <button onClick={addHotels}>Add Hotels</button>
//         {/* <div className="footerToTop" style={{ height: "40px" }}>
//           <button onClick={animateScroll.scrollToTop} className="toTop">
//             Back to top
//           </button>
//                 
//         </div> */}
//         {/* <div>
//           <p className="mt-3">Signup for free</p>
//         </div> */}
//         <div>
//           <Link className="mb-4" to="./signup">
//             <button
//               className="text-center"
//               style={{
//                 backgroundColor: "grey",
//                 color: "white",
//                 height: "40px",
//                 width: "100px",
//                 borderRadius: "16px",
//               }}
//             >
//               Signup
//             </button>
//           </Link>
//         </div>
//       </div>
//       <div
//         className="social_media row mb-5"
//         style={{ borderBottom: "1px solid white" }}
//       >
//         <div
//           className="col"
//           style={{ marginLeft: "110px", marginBottom: "20px" }}
//         >
//           Get connected with us on social networks:
//         </div>
//         <div className="col"></div>
//         <div className="col">
//           <FaInstagram style={{ marginLeft: "25px" }} />
//           <FaWhatsapp style={{ marginLeft: "25px" }} />
//           <FaFacebook style={{ marginLeft: "25px" }} />
//           <FaTwitter style={{ marginLeft: "25px" }} />
//           <FaGoogle style={{ marginLeft: "25px" }} />
//         </div>
//       </div>
//       <div className="row mb-5" style={{ borderBottom: "1px solid white" }}>
//         <div className="col" style={{ marginLeft: "50px" }}>
//           <p style={{ marginLeft: "50px", color: "white" }}>
//             <h6 className="" style={{ fontFamily: "cursive" }}>
//               Why Travel Bite?
//             </h6>
//             <p style={{ fontFamily: "cursive", marginTop: "20px" }}>
//               Travel Bite is a company with a special and user freindly
//               technology that allows user to book their travel packages
//               according to their wish with all the flexibity of prices and
//               places to visit,etc. We have a vision and assure to make the
//               travelling experience of the user the most memorable one. For more
//               details check out our{" "}
//               <Link
//                 style={{
//                   textDecoration: "none",
//                   fontFamily: "cursive",
//                   color: "white",
//                 }}
//                 to="/about"
//               >
//                 ABOUT
//               </Link>{" "}
//               Page
//             </p>
//           </p>
//         </div>
//         <div className="col center">
//           <h6
//             className="p-2"
//             style={{
//               marginLeft: "180px",
//               marginBottom: "20px",
//             }}
//           >
//             Useful Links
//           </h6>
//           <div className="links" style={{ marginLeft: "187px" }}>
//             <p>
//               <Link
//                 style={{ color: "white", textDecoration: "none" }}
//                 to="./about"
//               >
//                 Know About Us
//               </Link>
//             </p>
//             <p>
//               <Link
//                 style={{ color: "white", textDecoration: "none" }}
//                 to="./community"
//               >
//                 Connect to Community
//               </Link>
//             </p>
//             <p>
//               <Link
//                 style={{ color: "white", textDecoration: "none" }}
//                 to="./categories"
//               >
//                 Categories
//               </Link>
//             </p>
//           </div>
//         </div>
//         <div className="col">
//           <h6
//             className="p-2"
//             style={{
//               marginBottom: "20px",
//             }}
//           >
//             Contact Us
//           </h6>
//           <p>
//             <IoIosMail style={{ marginRight: "10px" }} />
//             abc@gmail.com
//           </p>
//           <p>
//             <FaPhoneAlt style={{ marginRight: "10px" }} />
//             +91-xxxxxxxxxx
//           </p>
//           <p>
//             <FaPhoneAlt style={{ marginRight: "10px" }} />
//             +91-xxxxxxxxxxx
//           </p>
//         </div>
//       </div>
//       <div style={{ display: "flex", justifyContent: "center" }}>
//         <FaRegCopyright style={{ marginTop: "3px", marginRight: "6px" }} />
//         <h6>2025 Copyright:TravelBIte.com</h6>
//       </div>
//     </div>
//   );
// }

// export default Footer;

import { Link } from "react-router-dom";
import "./Footer.css";
import { animateScroll } from "react-scroll";
import { FaFacebook, FaPhoneAlt } from "react-icons/fa";
import {
  FaWhatsapp,
  FaInstagram,
  FaTwitter,
  FaGoogle,
  FaRegCopyright,
} from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import axios from "axios";

const addHotels = async () => {
    try {
      const response = await axios.get("http://localhost:3002/add");
      console.log(response.data);
    } catch (error) {
      console.error("Error adding hotels:", error);
    }
  };

function Footer() {
  return (
    <div className="footer">
      {/* Signup Section */}
      <button onClick={addHotels}>Add Hotels</button>
      <div className="footer_signup">
        <p>Signup for free</p>
        <Link to="./signup">
          <button className="signup-btn" style={{ marginBottom: "10px" }}>
            Signup
          </button>
        </Link>
      </div>

      {/* Social Media Section */}
      <div className="social_media">
        <p>Get connected with us on social networks:</p>
        <div className="social-icons">
          {[
            { Icon: FaInstagram },
            { Icon: FaWhatsapp },
            { Icon: FaFacebook },
            { Icon: FaTwitter },
            { Icon: FaGoogle },
          ].map(({ Icon }, index) => (
            <Icon
              key={index}
              className="social-icon"
              onMouseOver={(e) => (e.target.style.filter = "brightness(1.5)")}
              onMouseOut={(e) => (e.target.style.filter = "brightness(1)")}
            />
          ))}
        </div>
      </div>

      {/* Footer Content */}
      <div className="footer-content">
        {/* Why Travel Bite? */}
        <div className="footer-section">
          <h6>Why Travel Bite?</h6>
          <p>
            Travel Bite is a company with a special and user-friendly technology
            that allows users to book their travel packages with flexibility in
            prices and destinations. We aim to make every travel experience
            memorable. For more details, check out our{" "}
            <Link to="/about" className="footer-link">
              ABOUT
            </Link>{" "}
            Page.
          </p>
        </div>

        {/* Useful Links */}
        <div className="footer-section">
          <h6>Useful Links</h6>
          <ul className="footer-links">
            <li>
              <Link to="./home">Home</Link>
            </li>
            <li>
              <Link to="./about">Know About Us</Link>
            </li>
            <li>
              <Link to="./community">Connect to Community</Link>
            </li>
            <li>
              <Link to="./categories">Categories</Link>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="footer-section">
          <h6>Contact Us</h6>
          <p>
            <IoIosMail className="contact-icon" /> abc@gmail.com
          </p>
          <p>
            <FaPhoneAlt className="contact-icon" /> +91-xxxxxxxxxx
          </p>
          <p>
            <FaPhoneAlt className="contact-icon" /> +91-xxxxxxxxxxx
          </p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-copyright">
        <FaRegCopyright />
        <h6 style={{ marginTop: "6px" }}>2025 Copyright: TravelBite.com</h6>
      </div>
    </div>
  );
}

export default Footer;
