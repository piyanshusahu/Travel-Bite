import React, { useState } from "react";
import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";
import "./UserInfo.css";
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BiSolidUserCircle } from "react-icons/bi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  gender: Yup.string()
    .oneOf(["male", "female"], "Select a valid gender")
    .required("Gender is required"),
  userName: Yup.string()
    .required("Username is required")
    .min(5, "Username is too short")
    .max(50, "Username is too long"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]+$/,
      "Password must contain letters and numbers"
    ),
});

function UserInfo() {
 const [submitted, setSubmitted] = useState(false);

const formik = useFormik({
  initialValues: {
    firstName: "",
    lastName: "",
    gender: "",
    userName: "",
    email: "",
    phone: "",
    password: "",
  },
  validationSchema: SignupSchema,
  onSubmit: (values) => {
    setSubmitted(true); // mark as submitted

    axios
      .post("http://localhost:3002/signup", values)
      .then(() => {
        toast.success("Signup Successful!");
      })
      .catch(() => {
        toast.error("Signup Failed!");
      });
  },
  validateOnChange: false,
  validateOnBlur: false,
});


  return (
    <div className="signup">
      <ToastContainer />
      <div className="outerDiv">
        <div className="wrapper mb-5">
          <form onSubmit={formik.handleSubmit} noValidate>
            <h1>Create a new account</h1>

            <div className="input-box">
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
              />
              <FaUser className="icon" />
            </div>
            {formik.touched.firstName && formik.errors.firstName && (
              <div className="error">{formik.errors.firstName}</div>
            )}

            <div className="input-box">
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
              />
              <FaUser className="icon" />
            </div>
            {formik.touched.lastName && formik.errors.lastName && (
              <div className="error">{formik.errors.lastName}</div>
            )}

            {/* <div className="gender">
              <h6 style={{ display: "inline", marginRight: "20px" }}>Gender</h6>
              <label style={{ marginRight: "30px" }}>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  checked={formik.values.gender === "male"}
                />{" "}
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  checked={formik.values.gender === "female"}
                />{" "}
                Female
              </label>
            </div> */}

<div className="input-box gender-box">
  <select
    name="gender"
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    value={formik.values.gender}
  >
    <option value="">Select Gender</option>
    <option value="male">Male</option>
    <option value="female">Female</option>
  </select>
  <FaUser className="icon" />
</div>

{submitted && formik.errors.password && (
  <div className="error">{formik.errors.password}</div>
)}


         

            <div className="input-box">
              <input
                type="text"
                placeholder="Username"
                name="userName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.userName}
              />
              <BiSolidUserCircle className="icon" />
            </div>
            {formik.touched.userName && formik.errors.userName && (
              <div className="error">{formik.errors.userName}</div>
            )}

            <div className="input-box">
              <input
                type="text"
                placeholder="E-mail Address"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              <MdEmail className="icon" />
            </div>
            {formik.touched.email && formik.errors.email && (
              <div className="error">{formik.errors.email}</div>
            )}

            <div className="input-box">
              <input
                type="text"
                placeholder="Phone Number"
                name="phone"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
              />
              <BsFillTelephoneFill className="icon" />
            </div>
            {formik.touched.phone && formik.errors.phone && (
              <div className="error">{formik.errors.phone}</div>
            )}

            <div className="input-box">
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              <FaLock className="icon" />
            </div>
            {formik.touched.password && formik.errors.password && (
              <div className="error" style={{ marginBottom: "15px" }}>{formik.errors.password}</div>
            )}

            <div className="remember-forgot" style={{ marginLeft: "60%" }}>
              <a href="#">Forget Password?</a>
            </div>

            <div
              className="searchOptions flex"
              style={{
                opacity: formik.isValid ? 1 : 0.6,
                cursor: formik.isValid ? "pointer" : "not-allowed",
              }}
            >
              <button
                type="submit"
                disabled={!formik.isValid}
                style={{ background: "none", border: "none" }}
              >
                <span style={{ color: "white" }}>Submit</span>
              </button>
            </div>

            <div className="register-link">
              <p>
                Already have an account? <a href="">Log in</a>
              </p>
            </div>

            {/* Optional Debug Info */}
            {/* <pre>{JSON.stringify(formik, null, 2)}</pre> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
