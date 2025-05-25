import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Home from "../home/HomePage";

function Profile() {
  const { userID } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`http://localhost:3002/profile/${userID}`);
        setUser(res.data);
      } catch (err) {
        console.error("Error fetching user:", err);
      }
    };
    fetchUser();
  }, [userID]);

  if (!userID) return <h2>Loading...</h2>;

  return (
    <div>
      {/* <h1>Welcome, {userID.name}!</h1>
      <p>Email: {userID.email}</p> */}
      <Home/>
    </div>
  );
}

export default Profile;
