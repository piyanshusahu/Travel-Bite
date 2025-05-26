import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";
import Stay from "./Stay";
import Travel from "./Travel";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="container" style={{ margin: "50px" }}>
      <Stay />
      <Travel />
      <Link to="./itenary">
        <Button variant="contained" style={{ marginLeft: "47%" }}>
          Next
        </Button>
      </Link>
    </div>
  );
}

export default App;
