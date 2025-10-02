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

function Footer() {
  return (
    <div className="footer">
      {/* Signup Section */}
      <div className="footer_signup">
        <p>Signup for free</p>
        <Link to="/signup">
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
              style={{ cursor: "pointer" }}
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
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">Know About Us</Link>
            </li>
            <li>
              <Link
              //to="/community"
              >
                Connect to Community
              </Link>
            </li>
            <li>
              <Link
                //to="/categories"
              >
                Categories
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="footer-section">
          <h6>Contact Us</h6>
          <p>
            <IoIosMail className="contact-icon" /> travelbite.4@gmail.com
          </p>
          <p>
            <FaPhoneAlt className="contact-icon" /> +91-9830140021
          </p>
          <p>
            <FaPhoneAlt className="contact-icon" /> +91-9455735544
          </p>
          <p>
            <FaPhoneAlt className="contact-icon" /> +91-9954246246s
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
