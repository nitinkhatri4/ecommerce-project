import React from "react";
import Mobiles from "./Mobiles";
import Electronics from "./Electronics";
import Products from "./Products";
import mobileImg from "../assets/mobiles.png";
import electronicsImg from "../assets/electronics.png";
import furnituresImg from "../assets/furniture.png";
import travelImg from "../assets/travel.png";
import toysImg from "../assets/toys.png";
import slidingImg from "../assets/sliding.png";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./Navbar";

const Home = () => {

  return (
    <>
      <div className="container">
        <img src={slidingImg} alt="" />
      </div>
      <div className=" container flex flex-row justify-evenly my-10">
        <div className="flex flex-col justify-center gap-0.5 text-center">
          <Link to="/mobiles">
            <img src={mobileImg} />
            Mobiles
          </Link>
        </div>
        <div className="flex flex-col justify-center gap-0.5 text-center">
          <Link to="/electronics">
            <img src={electronicsImg} />
            Electronis
          </Link>
        </div>
        <div className="cursor-pointer flex flex-col justify-center gap-0.5 text-center">
          <Link to="/furnitures">
            <img src={furnituresImg} />
            Furnitures
          </Link>
        </div>
        <div className="cursor-pointer flex flex-col justify-center gap-0.5 text-center">
          <Link to="/travel">
            <img src={travelImg} />
            Travel
          </Link>
        </div>
        <div className="cursor-pointer flex flex-col justify-center gap-0.5 text-center">
          <Link to="/toys">
            <img src={toysImg} />
            Toys&Playable
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
