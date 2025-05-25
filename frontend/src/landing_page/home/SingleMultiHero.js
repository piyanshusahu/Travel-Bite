import React from "react";
import { useState } from "react";

function SingleMultiHero() {
    const [selected, setSelected] = useState(true);
    let bgcolor="white";

    const toggleSelect = () => {
      setSelected(!selected); // Toggle selection
    };
  return (
    <div className="container">
      <div className="row">
        <div className="mt-3 mb-3" style={{ display: "flex"}}>
          <li className="" style={{ marginRight: "25px", marginLeft: "15px" ,}}>
            <i
              className={selected?"fa fa-check-circle-o":"fa fa-circle-thin"}
              aria-hidden="true"
              onClick={toggleSelect}
              style={{ marginRight: "7px"}}
            ></i>
            Single city
          </li>
          <li>
            <i
              className={selected?"fa fa-circle-thin":"fa fa-check-circle-o"}
              onClick={toggleSelect}
              
              style={{ marginRight: "7px" }}
              aria-hidden="true"
            ></i>
            Multi City
          </li>
        </div>
      </div>
    </div>
  );
}

export default SingleMultiHero;
