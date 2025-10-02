import React, { useState } from "react";
import Popup from "reactjs-popup";
import axios from "axios";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import "./Login.css";

function Login({ open = false, onClose = () => {} }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  const { currentUser, setCurrentUser } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setShowError(false);
    try {
      setLoading(true);
      const res = await axios.post("http://localhost:3002/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userID", res.data.userID);
      setCurrentUser(res.data.userID);
      setLoading(false);

      window.location.href = `/profile/${res.data.userID}`;
      onClose(); // close popup
    } catch (err) {
      setShowError(true);
      setLoading(false);
    }
  };

  return (
    <Popup
      modal
      nested
      open={open}
      trigger={
        !open && (
          <Link className="nav-links active" role="button" style={{ color: "white" }}>
              Login
          </Link>
        )
      }
      onOpen={() => {
        document.getElementById("app-content")?.classList.add("blur");
      }}
      onClose={() => {
        document.getElementById("app-content")?.classList.remove("blur");
        onClose(); // Notify AuthContext to reset modal state
      }}
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
          <h2 className="mb-2" style={{ fontSize: "40px", fontWeight: "bold" }}>
            Welcome Back!
          </h2>
          <p className="text-muted mb-4">Please enter your credentials below</p>
          <div className="input-container" style={{ display: "flex", flexDirection: "column" }}>
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter the email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {showError && (
            <div style={{ color: "red", marginTop: "10px" }}>
              Incorrect email or password.
            </div>
          )}

          <Link
            to="/forgot-password"
            onClick={close}
            style={{ marginLeft: "350px", marginTop: "20px", textDecoration: "none" }}
          >
            Forgot Password?
          </Link>

          <button
            onClick={handleLogin}
            disabled={loading}
            style={{
              color: "white",
              backgroundColor: "blueviolet",
              borderRadius: "10px",
              width: "100%",
              height: "50px",
              marginTop: "20px",
            }}
          >
            {loading ? "Loading..." : "Login"}
          </button>

          <div className="divider">
            <div className="line"></div>
            <p className="text-center" style={{ whiteSpace: "nowrap" }}>
              Or
            </p>
            <div className="line"></div>
          </div>

          <div className="googleLogin" style={{ justifyContent: "center", display: "flex" }}>
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                try {
                  const decoded = jwtDecode(credentialResponse.credential);
                  localStorage.setItem("token", credentialResponse.credential);
                  localStorage.setItem("userID", decoded.sub);
                  setCurrentUser(decoded.sub);
                  window.location.href = `/profile/${decoded.sub}`;
                  onClose(); // close popup
                } catch (e) {
                  console.error(e);
                }
              }}
              onError={() => {
                console.log("Google Login Error");
              }}
            />
          </div>

          <p className="text-muted text-center" style={{ marginTop: "15px" }}>
            Don't have an account?
            <Link to="/signup" onClick={close} style={{ color: "purple", marginLeft: "7px" }}>
              Sign Up
            </Link>
          </p>
        </div>
      )}
    </Popup>
  );
}

export default Login;
