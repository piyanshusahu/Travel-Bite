import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import HomePage from "./landing_page/home/HomePage.js";
import About from "./landing_page/about/AboutPage.js";
import Categories from "./landing_page/categories/Categories.js";
import Signup from "./landing_page/signup/SignPage.js";
import Navbar from "./landing_page/Navbar.js";
import Footer from "./landing_page/Footer.js";
import Budget from "./itenary/budget/BudgetPage.js";
import CommunityPage from "./landing_page/community/CommunityPage.js";
import Summer from "./landing_page/home/summer/Summer.js";
import Winter from "./landing_page/home/winter/Winter.js";
import Spring from "./landing_page/home/spring/Spring.js";
import Autumn from "./landing_page/home/autumn/Autumn.js";
import Monsoon from "./landing_page/home/monsoon/Monsoon.js";
import Login from "./landing_page/Login.js";
import DisplayPage from "./itenary/display/DisplayPage.js";
import ForgotPassword from "./landing_page/home/ForgotPassword.js";
import ResetPassword from "./landing_page/home/ResetPassword.js";
import Profile from "./landing_page/signup/profile.js";
import { GoogleOAuthProvider } from "@react-oauth/google";

import { ThemeProvider, createTheme } from "@mui/material/styles";  // <-- added MUI imports

const CLIENT_ID =
  "891259342392-4qqvjre6s72nuj0jsr4bo2vilfauq8e0.apps.googleusercontent.com";

const theme = createTheme(); // <-- create default MUI theme (customize if needed)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}> {/* Wrap with ThemeProvider */}
    <AuthProvider>
      <GoogleOAuthProvider clientId={CLIENT_ID}>
        <BrowserRouter>
          <div id="app-content">
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/community" element={<CommunityPage />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/budget" element={<Budget />} />
              <Route path="/summer" element={<Summer />} />
              <Route path="/winter" element={<Winter />} />
              <Route path="/spring" element={<Spring />} />
              <Route path="/autumn" element={<Autumn />} />
              <Route path="/monsoon" element={<Monsoon />} />
              <Route path="/display" element={<DisplayPage />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/reset-password/:token" element={<ResetPassword />} />
              <Route path="/profile/:userID" element={<Profile />} />
              <Route path="/itenary" element={<DisplayPage />} />
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
      </GoogleOAuthProvider>
    </AuthProvider>
  </ThemeProvider>
);
