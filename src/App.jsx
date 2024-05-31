import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Mobiles from "./components/Mobiles";
import Electronics from "./components/Electronics";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

function App() {
  const data = [
    {
      id: 1,
      productName: "Redmi 13C 5G",
      productDescription: "This is the description of first product",
      price: "$900",
    },
    {
      id: 2,
      productName: "Redmi 13C",
      productDescription: "This is the description of second product",
      price: "$1000",
    },
    {
      id: 3,
      productName: "Redmi 12",
      productDescription: "This is the description of third product",
      price: "$120",
    },
    {
      id: 4,
      productName: "Redmi A2",
      productDescription: "This is the description of fourth product",
      price: "$23000",
    },

    {
      id: 5,
      productName: "Realme P1 Pro 5G",
      productDescription: "This is the description of first product",
      price: "$900",
    },
    {
      id: 6,
      productName: "Realme 12x 5G",
      productDescription: "This is the description of second product",
      price: "$1000",
    },
    {
      id: 7,
      productName: "Realme C51",
      productDescription: "This is the description of third product",
      price: "$120",
    },
    {
      id: 7,
      productName: "Realme C53",
      productDescription: "This is the description of fourth product",
      price: "$23000",
    },
  ];

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/mobiles" element={<Mobiles data={data}/>}></Route>
        <Route path="/products/id1" element={<Products data={data.id}/>}></Route>
        <Route path="/electronics" element={<Electronics />}></Route>
      </Routes>
    </>
  );
}
export default App;
