import React, { useEffect } from "react";
import { useAuth } from "./context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { currentUser, setShowLoginModal } = useAuth();

  useEffect(() => {
    if (!currentUser) {
      setShowLoginModal(true);
    }
  }, [currentUser, setShowLoginModal]);

  return currentUser ? children : null; // render nothing if not logged in
};

export default PrivateRoute;
