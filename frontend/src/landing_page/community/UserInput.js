import React,{useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import FeedbackTab from "./FeedbackTab";

function UserInput() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is authenticated
    fetch("/api/isAuthenticated", { credentials: "include" }) // Include credentials for session cookies
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error("Not authenticated");
        }
      })
      .then((data) => {
        setIsAuthenticated(data.isAuthenticated);
      })
      .catch(() => {
        // Redirect to login if not authenticated
        navigate("/login");
      });
  }, [navigate]);

  // If authentication check is ongoing
  if (!isAuthenticated) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5" style={{ marginLeft: "150px" }}>
      <div className="row">
        <div
          className="sidebar col-5 text-center"
          style={{
            backgroundColor: "#F5F5F5",
            width: "200px",
            height: "300px",
            padding: "10px",
          }}
        >
          <Link style={{ textDecoration: "none" }} to="">
            <h6 style={{ padding: "10px", fontSize: "17px", color: "black" }}>
              Link1
            </h6>
          </Link>
          <Link style={{ textDecoration: "none" }} to="">
            <h6 style={{ padding: "10px", fontSize: "17px", color: "black" }}>
              Link2
            </h6>
          </Link>
          <Link style={{ textDecoration: "none" }} to="">
            <h6 style={{ padding: "10px", fontSize: "17px", color: "black" }}>
              Link3
            </h6>
          </Link>
          <Link style={{ textDecoration: "none" }} to="">
            <h6 style={{ padding: "10px", fontSize: "17px", color: "black" }}>
              Link4
            </h6>
          </Link>
          <Link style={{ textDecoration: "none" }} to="">
            <h6 style={{ padding: "10px", fontSize: "17px", color: "black" }}>
              Link5
            </h6>
          </Link>
        </div>
        <div className="main col">
          <FeedbackTab />
        </div>
      </div>
    </div>
  );
}

export default UserInput;
