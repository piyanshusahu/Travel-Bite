import * as React from "react";
import { styled } from "@mui/material/styles";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Travel from "./Travel";

const BpIcon = styled("span")(({ theme }) => ({
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
function InputRadios() {
    const [carRentals,setcarRentals]=React.useState(false);
    
  return (
    <div>
      <FormControl>
        <FormLabel id="demo-customized-radios">Food Type</FormLabel>
        <RadioGroup
          defaultValue="mixed"
          aria-labelledby="demo-customized-radios"
          name="customized-radios"
        >
          <FormControlLabel
            value="Only Veg"
            control={<BpRadio />}
            label="Veg"
          />
          <FormControlLabel
            value="Only Non-Veg"
            control={<BpRadio />}
            label="Non-Veg"
          />
          <FormControlLabel value="Mixed" control={<BpRadio />} label="Mixed" />
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel id="demo-customized-radios">Do you want to opt for Car Rentals</FormLabel>
        <RadioGroup
          defaultValue="mixed"
          aria-labelledby="demo-customized-radios"
          name="customized-radios"
        >
          <FormControlLabel
            value="Only Veg"
            control={<BpRadio />}
            label="Yes"
            onClick={()=>setcarRentals(true)}
          />
          <FormControlLabel
            value="Only Non-Veg"
            control={<BpRadio />}
            label="No"
            onClick={()=>setcarRentals(false)}
          />
        </RadioGroup>
      </FormControl>
      {carRentals && < Travel/>}
    </div>
  );
}

export default InputRadios;
