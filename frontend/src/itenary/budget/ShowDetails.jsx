import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareXmark,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import DialBox from "./DialBox.jsx";

// Optional: Slide transition
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ShowDetails({ stayPlace }) {
  let name = stayPlace.name;
  let address = stayPlace.address;
  let contact = stayPlace.contact;
  let city = stayPlace.city;
  let amenities = stayPlace.amenities;
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <React.Fragment>
      <Button variant="contained" onClick={handleClickOpen("paper")}>
        Open Scrollable Dialog
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        TransitionComponent={Transition}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        PaperProps={{
          style: {
            width: "100%",
            height: "100%",
          },
        }}
      >
        <div className="top" style={{ justifyContent: "space-between" }}>
          <Button onClick={handleClose} style={{ color: "black" }}>
            &lt; Go Back
          </Button>
        </div>
        <DialBox stayPlace={stayPlace} />

        <div className="row">
          <div className="col"></div>
          <div style={{display:"flex",justifyContent:"center"}}>
              <Button
                onClick={handleClose}
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
    </React.Fragment>
  );
}
