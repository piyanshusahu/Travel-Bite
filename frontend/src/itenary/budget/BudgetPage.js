import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";
import Stay from "./Stay";
import Travel from "./Travel";
import Button from "@mui/material/Button";

function App() {
  return (
    <div className="container" style={{ margin: "50px" }}>
      <Stay />
      <Travel />
      <Button variant="contained" style={{ marginLeft: "47%" }}>
        Next
      </Button>
    </div>
  );
}

export default App;
