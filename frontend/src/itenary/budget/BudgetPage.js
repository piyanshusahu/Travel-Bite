import React, { useState } from "react";
import Button from "@mui/material/Button";
import { useLocation, useNavigate } from "react-router-dom";
import Stay from "./Stay";
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
  const hotelId = queryParams.get("hotelId");

  const [food, setFood] = useState("");

  const handleNext = () => {
    if (!hotelId) {
      alert("Please select a hotel first");
      return;
    }

    navigate(
      `/itenary?src=${src}&dest=${dest}&no=${no}&dep=${dep}&ret=${ret}&food=${food}&hotelId=${hotelId}`
    );
  };

  return (
    <div className="container" style={{ margin: "50px" }}>
      <Stay />

      <div className="moreFilter">
        <InputRadios food={food} setFood={setFood} />
      </div>

      <Button
        variant="contained"
        style={{
          height: "7vh",
          width: "20vw",
          marginLeft: "36%",
          marginTop: "2%",
          marginBottom: "5%",
          borderRadius: "2rem",
          fontFamily: "cursive",
          fontWeight: "bold",
          fontSize: "1.2rem",
        }}
        onClick={handleNext}
      >
        Display the itinerary
      </Button>
    </div>
  );
}

export default BudgetPage;
