import React from "react";
import redmi1 from "../assets/redmi1.png";
import redmi2 from "../assets/redmi2.png";
import redmi3 from "../assets/redmi3.png";
import redmi4 from "../assets/redmi4.png";
import realme1 from "../assets/realme1.png";
import realme2 from "../assets/realme2.png";
import realme3 from "../assets/realme3.png";
import realme4 from "../assets/realme4.png";
import Products from "./Products";
import { Link } from "react-router-dom";

const Mobiles = ({data}) => {
  return (
    <>
      <div className="container flex flex-col justify-around my-7 gap-3">
        <h3 className="text-xl font-bold">Redmi Smartphones</h3>
        <div className="flex flew-row justify-start gap-16 mx-3">
          <div className="flex flex-col justify-center gap-2 text-center">
            <Link to="/products/id1">
              <img src={redmi1} alt="" id="images" />
              {data[0].productName}
            </Link>
          </div>
          <div className="flex flex-col justify-center gap-2 text-center">
            <img src={redmi2} alt="" id="images" />
            {data[1].productName}
          </div>
          <div className="flex flex-col justify-center gap-2 text-center">
            <img src={redmi3} alt="" id="images" />
            {data[2].productName}
          </div>
          <div className="flex flex-col justify-center gap-2 text-center">
            <img src={redmi4} alt="" id="images" />
            {data[3].productName}
          </div>
        </div>
        <hr />
        <h3 className="text-xl font-bold">Realme Smartphones</h3>
        <div className="flex flex-row justify-start gap-16 mx-3">
          <div className="flex flex-col justify-center gap-2 text-center">
            <img src={realme1} alt="" id="images" />
            {data[4].productName}
          </div>
          <div className="flex flex-col justify-center gap-2 text-center">
            <img src={realme2} alt="" id="images" />
            {data[5].productName}
          </div>
          <div className="flex flex-col justify-center gap-2 text-center">
            <img src={realme3} alt="" id="images" />
            {data[6].productName}
          </div>
          <div className="flex flex-col justify-center gap-2 text-center">
            <img src={realme4} alt="" id="images" />
            {data[7].productName}
          </div>
        </div>
      </div>
    </>
  );
};

export default Mobiles;
