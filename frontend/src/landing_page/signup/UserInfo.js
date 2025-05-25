import React from "react";
import axios from "axios";
import * as Yup from "yup";
import { useState, useEffect } from "react";
import { Formik, useFormik } from "formik";
import "./UserInfo.css";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BiSolidUserCircle } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Login from "../Login";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  userName: Yup.string()
    .required("Required")
    .min(5, "Short")
    .max(50, "Too Long"),
  password: Yup.string().required("Required!").min(8, "Weak Password"),
});

function UserInfo() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      Gender: "rather not say",
      userName: "",
      email: "",
      phone: "",
      password: "",
    },
    validationSchema: SignupSchema,
  });
const submitInfo = () => {
  if(formik.values.firstName===""){
    alert("Required first name");
  }
  axios.post("http://localhost:3002/signup", {
    firstName: formik.values.firstName,
    lastName: formik.values.lastName,
    gender: formik.values.gender,
    userName: formik.values.userName,
    email: formik.values.email,
    phone: formik.values.phone,
    password: formik.values.password,
    isRemember: formik.values.isRemember,
  });
};

  return (
    <div className="signup">
      <div
        className="outerDiv"
        style={{
          fontFamily: "Poppins,sans-serif",
          webkitFontSmoothing: "antialiased",
          mozOsxFontSmoothing: "grayscale",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "10px 10px 10px 10px",
        }}
      >
        <div className="wrapper mb-5">
          <form onSubmit={formik.handleSubmit}>
            <h1>Create a new account</h1>
            <div className="input-box">
              <input
                type="text"
                placeholder="First Name"
                onChange={formik.handleChange}
                value={formik.values.firstName}
                name="firstName"
                required
              />

              <FaUser className="icon" />
            </div>

            <div className="input-box">
              <input
                type="text"
                placeholder="Last Name"
                onChange={formik.handleChange}
                value={formik.values.lastName}
                name="lastName"
                required
              />
              <FaUser className="icon" />
            </div>

            <div
              className="gender"
              style={{
                marginTop: "-15px",
                marginBottom: "-15px",
              }}
            >
              <h6
                style={{
                  display: "inline",
                  marginRight: "20px",
                  marginLeft: "50px",
                }}
              >
                Gender
              </h6>

              <label style={{ marginRight: "30px" }}>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={formik.handleChange}
                />{" "}
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={formik.handleChange}
                />{" "}
                Female
              </label>
            </div>

            <div className="input-box">
              <input
                type="text"
                placeholder="Username"
                onChange={formik.handleChange}
                value={formik.values.userName}
                name="userName"
                required
              />
              <BiSolidUserCircle className="icon" />
            </div>

            <div className="input-box">
              <input
                type="text"
                placeholder="E-mail Address"
                onChange={formik.handleChange}
                value={formik.values.email}
                name="email"
                required
              />
              <MdEmail className="icon" />
            </div>

            <div className="input-box">
              <input
                type="text"
                placeholder="Phone Number"
                onChange={formik.handleChange}
                value={formik.values.phone}
                name="phone"
                required
              />
              <BsFillTelephoneFill className="icon" />
            </div>

            <div className="input-box">
              <input
                type="password"
                placeholder="Password"
                onChange={formik.handleChange}
                value={formik.values.password}
                name="password"
                required
              />
              <FaLock className="icon" />
            </div>

            <div className="remember-forgot">
              <label>
                <input
                  type="checkbox"
                  value={true}
                  onChange={formik.handleChange}
                />
                Remember me
              </label>
              <a href="#">Forget Password?</a>
            </div>
            <Link to="/">
              <button type="submit" onClick={submitInfo}>
                Sign Up
              </button>
            </Link>
            <div className="register-link">
              <p>
                Already have an account? <a href="">Log in</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
