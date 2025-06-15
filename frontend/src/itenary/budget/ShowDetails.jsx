import * as React from "react";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import Button from "@mui/material/Button";
import DialBox from "./DialBox.jsx";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ShowDetails({ stayPlace, open, onClose }) {
  const id = stayPlace.id;
  const name = stayPlace.name;

  function handleHotelSelection() {
    alert(`You selected: ${name}`);
    onClose(); // close dialog after selection
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      scroll="paper"
      TransitionComponent={Transition}
      aria-labelledby="scroll-dialog-title"
      PaperProps={{
        style: {
          width: "55vw",
          maxWidth: "70vw",
          height: "100vh",
        },
      }}
    >
      <div className="top" style={{ justifyContent: "space-between" }}>
        <button
          onClick={onClose}
          style={{
            marginBottom: "1rem",
            backgroundColor: "#f3f4f6",
            padding: "8px 12px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          ← Go Back
        </button>
        <div style={{ color: "black" }}>{id}</div>
      </div>

      <DialBox stayPlace={stayPlace} />

      <div className="row">
        <div className="col"></div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            onClick={handleHotelSelection}
            style={{ transition: "all ease-in 0.2s" }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "blue";
              e.target.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "white";
              e.target.style.color = "blue";
            }}
          >
            Select
          </Button>
        </div>
      </div>
    </Dialog>
  );
}
