import React, { useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    try {
      const res = await axios.post("http://localhost:3002/forgot-password", {
        email,
      });
      setMessage(res.data.message);
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 mt-4 mb-5"
      style={{ height: "80vh", width: "100vw" }}
    >
      <div
        className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md"
        style={{
          height: "70vh",
          width: "40vw",
          padding: "3rem",
          marginLeft: "30vw",
          borderRadius: "3rem",
          boxShadow: "2px 1px 2px 2px grey",
        }}
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
          🔒 Forgot Password
        </h2>
        <p
          className="text-gray-600 text-center mb-5"
          style={{ fontFamily: "italics" }}
        >
          Enter your email to get a reset link
        </p>

        {message && (
          <p className="bg-green-100 text-green-700 text-sm p-3 rounded mb-4 text-center">
            {message}
          </p>
        )}

        {error && (
          <p className="bg-red-100 text-red-700 text-sm p-3 rounded mb-4 text-center">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div
            className="emailInput"
            style={{ marginTop: "16%", marginBottom: "10%" }}
          >
            <TextField
              fullWidth
              label="Email address"
              variant="outlined"
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon color="action" />
                  </InputAdornment>
                ),
              }}
            />
          </div>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{
              mt: 3,
              py: 1.5,
              fontWeight: "500",
              marginLeft: "33%",
              marginTop: "7%",
            }}
          >
            📩 Send Reset Link
          </Button>
        </form>

        <div className="text-center" style={{ marginTop: "15%" }}>
          <a href="/" className="text-blue-500 hover:underline text-sm">
            Back to Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
