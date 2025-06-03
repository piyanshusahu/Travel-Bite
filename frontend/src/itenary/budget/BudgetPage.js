import React from "react";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";
import Stay from "./Stay";
import Travel from "./Travel";
import Button from "@mui/material/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion
import { styled } from "@mui/material/styles";
import InputRadios from "./InputRadios";


function BudgetPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);

  const src = queryParams.get("src");
  const dest = queryParams.get("dest");
  const no = queryParams.get("no");
  const dep = queryParams.get("dep");
  const ret = queryParams.get("ret");

  const handleNext = () => {
    navigate(
      `/itenary?src=${encodeURIComponent(src)}&dest=${encodeURIComponent(
        dest
      )}&no=${encodeURIComponent(no)}&dep=${encodeURIComponent(
        dep
      )}&ret=${encodeURIComponent(ret)}`
    );
  };

  return (
    <motion.div
      className="container"
      style={{ margin: "50px" }}
      initial={{ opacity: 0, x: -100 }} // Start invisible and 100px to the left
      animate={{ opacity: 1, x: 0 }} // Animate to fully visible and original position
      transition={{ duration: 0.8, ease: "easeOut" }} // Smooth animation
    >
      <Stay />
      {/* <Travel /> */}
      <div className="moreFilter">
        <InputRadios />
      </div>

      <Button
        variant="contained"
        style={{
          height: "7vh",
          width: "9vw",
          marginLeft: "44%",
          marginTop: "9%",
          marginBottom: "5%",
          borderRadius: "2rem",
          fontFamily: "cursive",
          fontWeight: "bold",
          fontSize: "1.2rem",
        }}
        onClick={handleNext}
      >
        Next
      </Button>
    </motion.div>
  );
}

export default BudgetPage;
