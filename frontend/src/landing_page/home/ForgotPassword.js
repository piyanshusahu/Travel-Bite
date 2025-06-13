// import React, {useState} from "react";
// import axios from "axios";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import InputAdornment from "@mui/material/InputAdornment";
// import EmailIcon from "@mui/icons-material/Email";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

// const ForgotPassword = () => {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage("");
//     setError("");
//     try {
//       const res = await axios.post("http://localhost:3002/forgot-password", {
//         email,
//       });
//       setMessage(res.data.message);
//     } catch (err) {
//       setError(err.response?.data?.message || "Something went wrong");
//     }
//   };

//   return (
//     <div
//       className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 mt-4 mb-5"
//       style={{ height: "80vh", width: "100vw" }}
//     >
//       <div
//         className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md"
//         style={{
//           height: "70vh",
//           width: "40vw",
//           padding: "3rem",
//           marginLeft: "30vw",
//           borderRadius: "3rem",
//           boxShadow: "2px 1px 2px 2px grey",
//         }}
//       >
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
//           🔒 Forgot Password
//         </h2>
//         <p
//           className="text-gray-600 text-center mb-5"
//           style={{ fontFamily: "italic" }}
//         >
//           Enter your email to get a reset link
//         </p>

//         {message && (
//           <p className="bg-green-100 text-green-700 text-sm p-3 rounded mb-4 text-center">
//             {message}
//           </p>
//         )}

//         {error && (
//           <p className="bg-red-100 text-red-700 text-sm p-3 rounded mb-4 text-center">
//             {error}
//           </p>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div
//             className="emailInput"
//             style={{ marginTop: "16%", marginBottom: "10%" }}
//           >
//             <TextField
//               fullWidth
//               label="Email address"
//               variant="outlined"
//               required
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <FontAwesomeIcon icon={faEnvelope} color="action" />
//                   </InputAdornment>
//                 ),
//               }}
//             />
//           </div>
//           <div className="flex" style={{justifyContent:"space-between"}}>
//             <Button
//               type="submit"
//               variant="contained"
//               color="primary"
//               sx={{
//                 mt: 3,
//                 py: 1.5,
//                 fontWeight: "500",
//                 marginLeft: "33%",
//                 marginTop: "7%",
//               }}
//             >
//               📩 Send Reset Link
//             </Button>
//             <a
//               href="/"
//               className="text-blue-500 hover:underline text-sm"
//               style={{ marginTop: "5%" }}
//               onMouseOver={(e)=>{
//                 e.target.style.backgroundColor="blue";
//                 e.target.style.color="white";
//               }}
//               onMouseLeave={(e)=>{
//                 e.target.style.backgroundColor="white";
//                 e.target.style.color="blue";
//               }}
//             >
//               Back to Login
//             </a>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ForgotPassword;


import React, { useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:3002/forgot-password", {
        email,
      });
      setMessage(res.data.message);
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      <div
        className="bg-white shadow-xl rounded-3xl p-8 w-full max-w-md"
        style={{
          height: "70vh",
          width: "40vw",
          padding: "3rem",
          marginLeft: "30vw",
          boxShadow: "2px 1px 2px 2px grey",
        }}
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
          🔒 Forgot Password
        </h2>
        <p className="text-gray-600 text-center mb-5 italic">
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

        <form onSubmit={handleSubmit} className="space-y-4 mt-10 mb-6">
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
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-gray-500"
                  />
                </InputAdornment>
              ),
            }}
          />

          <div className="flex items-center justify-between mt-6">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={loading}
              sx={{
                py: 1.5,
                fontWeight: "500",
              }}
            >
              {loading ? "Sending..." : "📩 Send Reset Link"}
            </Button>
            <a
              href="/"
              className="text-blue-500 hover:bg-blue-500 hover:text-white text-sm py-1 px-2 rounded transition-colors"
            >
              Back to Login
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
