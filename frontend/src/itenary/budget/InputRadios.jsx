import * as React from "react";
import { styled } from "@mui/material/styles";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Travel from "./Travel";

function InputRadios() {
  const [carRentals, setcarRentals] = React.useState(false);
  const BpIcon = styled("li")(({ theme }) => ({
    borderRadius: "50%",
    width: 16,
    height: 16,
    boxShadow:
      "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor: "#f5f8fa",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
    ".Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2,
    },
    "input:hover ~ &": {
      backgroundColor: "#ebf1f5",
      ...theme.applyStyles("dark", {
        backgroundColor: "#30404d",
      }),
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)",
      ...theme.applyStyles("dark", {
        background: "rgba(57,75,89,.5)",
      }),
    },
    ...theme.applyStyles("dark", {
      boxShadow: "0 0 0 1px rgb(16 22 26 / 40%)",
      backgroundColor: "#394b59",
      backgroundImage:
        "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))",
    }),
  }));

  const BpCheckedIcon = styled(BpIcon)({
    backgroundColor: "#137cbd",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&::before": {
      display: "block",
      width: 16,
      height: 16,
      backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
      content: '""',
    },
    "input:hover ~ &": {
      backgroundColor: "#106ba3",
    },
  });

  // Inspired by blueprintjs
  function BpRadio(props) {
    return (
      <Radio
        disableRipple
        color="default"
        checkedIcon={<BpCheckedIcon />}
        icon={<BpIcon />}
        {...props}
      />
    );
  }

  return (
    <>
      <div className="container flex">
        <div
          className="typeOfFood"
          style={{ height: "30vh", width: "30vw", padding: "2rem" }}
        >
          <FormControl>
            <FormLabel id="demo-customized-radios">
              <p
                style={{
                  fontFamily: "cursive",
                  fontWeight: "bold",
                  fontSize: "1.5em",
                }}
              >
                Choose your food type
              </p>
            </FormLabel>
            <RadioGroup
              defaultValue="mixed"
              aria-labelledby="demo-customized-radios"
              name="customized-radios"
              style={{}}
            >
              <FormControlLabel
                value="Only Veg"
                control={<BpRadio />}
                label="Pure Veg"
                style={{ margin: "0.8rem" }}
              />
              <FormControlLabel
                value="Jain"
                control={<BpRadio />}
                label="Jain"
                style={{ margin: "0.8rem" }}
              />
              <FormControlLabel
                value="Only Non-Veg"
                control={<BpRadio />}
                label="Non-Veg"
                style={{ margin: "0.8rem" }}
              />
              <FormControlLabel
                value="Mixed"
                control={<BpRadio />}
                label="Mixed"
                style={{ margin: "0.8rem" }}
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div
          className="car"
          style={{ height: "30vh", width: "30vw", padding: "2rem" }}
        >
          <FormControl>
            <FormLabel id="demo-customized-radios">
              <p
                style={{
                  fontFamily: "cursive",
                  fontWeight: "bold",
                  fontSize: "1.5em",
                }}
              >
                Do you want to rent a car?
              </p>
            </FormLabel>
            <RadioGroup
              defaultValue="mixed"
              aria-labelledby="demo-customized-radios"
              name="customized-radios"
            >
              <FormControlLabel
                value="Only Veg"
                control={<BpRadio />}
                label="Yes"
                onClick={() => setcarRentals(true)}
                style={{ margin: "0.8rem" }}
              />
              <FormControlLabel
                value="Only Non-Veg"
                control={<BpRadio />}
                label="No"
                onClick={() => setcarRentals(false)}
                style={{ margin: "0.8rem" }}
              />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
      <div style={{ marginTop: "15%" }}>{carRentals && <Travel />}</div>
    </>
  );
}

export default InputRadios;
