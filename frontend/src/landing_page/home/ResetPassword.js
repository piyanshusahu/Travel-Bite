import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ResetPassword = () => {
  const { token } = useParams();
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:3002/reset-password/${token}`, { newPassword });
      setMessage(res.data.message);
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    } catch (error) {
      setMessage("Error: " + error.response.data.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-96">
        <h2 className="text-xl font-semibold text-center mb-4">Reset Password</h2>

        {message && <p className="text-green-600 text-center">{message}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full p-2 border rounded-md"
          />
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md">
            Reset Password
          </button>
        </form>
      </div>
    </div>
    
  );
};

export default ResetPassword;
