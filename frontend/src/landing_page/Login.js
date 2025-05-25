import React from "react";
import Popup from "reactjs-popup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import "./Login.css";

function Login() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const {CurrentUser, setCurrentUser} = useAuth();
  
  const handleLogin = async (e)=>{
    e.preventDefault();
    document.getElementById("hide").classList.add("hidden");
    try{
      setLoading(true);
      const res = await axios.post("http://localhost:3002/login",{
        email: email,
        password: password
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userID", res.data.userID);

      setCurrentUser(res.data.userID);
      setLoading(false);

      window.location.href = `/profile/${res.data.userID}`;
      
    }
    catch(err){
      console.log(err);
      document.getElementById("hide").classList.remove("hidden");
      setLoading(false);
    };
  }

  return (
  <Popup
  trigger={
    <Link className="nav-links active" role="button" aria-expanded="false" style={{color: "white"}}>
      Login
    </Link>
  }
  modal
  nested
>
  {(close) => (
    <div
      className="modal-content"
      style={{
        border: "2px solid ",
        borderRadius: "20px",
        backgroundColor: "azure",
        padding: "30px",
        height: "600px",
        width: "550px",
      }}
    >
      <h2
        className="mb-2"
        style={{ fontFamily: "Arial, sans-serif", fontSize: "40px", fontWeight: "bold" }}
      >
        Welcome Back!
      </h2>
      <p className="text-muted mb-4">Please enter your credentials below</p>
      <div
        className="input-container"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "4px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter the email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="hidden" id="hide"
      style={{
        color: "red",
        textAlign: "center",
        marginTop: "10px",
        paddingTop: "5px"
        }}>
        Incorrect email or password.
      </div>
      
      <Link
        to="/forgot-password"
        onClick={() => close()}
        style={{
          marginLeft: "350px",
          textDecoration: "none",
          marginBottom: "20px",
          marginTop: "20px",
          color: "black",
          fontFamily: "Arial, sans-serif",
        }}
      >
        Forgot Password?
      </Link>
      <Link to={`/profile/${CurrentUser}`} className="text-center">
        <button
          onClick={handleLogin}
          disabled={loading}
          style={{
            color: "white",
            backgroundColor: "blueviolet",
            borderRadius: "10px",
            width: "500px",
            height: "50px",
            marginBottom: "15px",
            fontFamily: "Arial, sans-serif",
            fontSize: "18px",
          }}
        >
          {loading ? "Loading..." : "Login"}
        </button>
      </Link>
      <div className="divider">
        <div className="line"></div>
        <p className="text-center" style={{ whiteSpace: "nowrap" }}>
          Or
        </p>
        <div className="line"></div>
      </div>
      <Link to="" className="text-center">
        <button
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            width: "500px",
            height: "50px",
            fontFamily: "Arial, sans-serif",
            fontSize: "17px",
          }}
        >
          <i className="fa-brands fa-google" style={{ marginRight: "5px" }}></i>
          Log in with Google
        </button>
      </Link>
      <p className="text-muted text-center" style={{ marginTop: "15px" }}>
        Don't have an account?
        <Link
          to="./signup"
          onClick={() => close()} // Close the popup when the Sign Up link is clicked
          style={{ color: "purple", marginLeft: "7px" }}
        >
          Sign Up
        </Link>
      </p>
    </div>
  )}
</Popup>

  );
}


export default Login;

