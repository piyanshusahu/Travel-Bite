import React, { useState } from "react";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3002/forgot-password", { email });
      setMessage(res.data.message);
    } catch (error) {
      setMessage("Error: " + (error.response?.data?.message || " error"));
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-96">
        <h2 className="text-xl font-semibold text-center mb-4">Forgot Password</h2>
        <p className="text-gray-600 text-center mb-4">Enter your email to receive a reset link</p>

        {message && <p className="text-green-600 text-center">{message}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded-md"
          />
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md">
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
