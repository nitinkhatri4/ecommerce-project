import React from "react";
import productImg from "../assets/productImg.png";

const Products = () => {
  const data1 = [
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
  ];

  return (
    <>
      <div>Nitin Khatri</div>
      <div className="flex flex-col lg:flex-row bg-white p-4">
        <div className="flex flex-col items-center lg:w-1/3">
          <img
            src={productImg}
            alt="REDMI 13C 5G"
            className="mb-4 w-full lg:w-auto size-[500px]"
          />
        </div>

        <div className="lg:w-2/3 lg:pl-8">
          <h1 className="text-xl font-semibold">
            REDMI 13C 5G (Startrail Green, 128 GB) (4 GB RAM)
          </h1>
          <div className="flex items-center space-x-2 mt-2">
            <div className="text-green-600 font-bold">4.2 ★</div>
            <div className="text-gray-500">3,758 Ratings & 177 Reviews</div>
            <div className="ml-2 px-2 py-1 bg-blue-100 text-blue-600 rounded">
              Flipkart Assured
            </div>
          </div>

          <div className="mt-4">
            <div className="flex items-center space-x-2">
              <span className="text-3xl font-bold">₹10,499</span>
              <span className="line-through text-gray-500">₹13,999</span>
              <span className="text-green-600 font-semibold">25% off</span>
            </div>
          </div>

          <div className="mt-4">
            <h2 className="text-lg font-semibold">Available offers</h2>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <li>
                Bank Offer: Get ₹50 instant discount on first Flipkart UPI txn
                on order of ₹200 and above{" "}
                <a href="#" className="text-blue-600">
                  T&C
                </a>
              </li>
              <li>
                Bank Offer: 5% Cashback on Flipkart Axis Bank Card{" "}
                <a href="#" className="text-blue-600">
                  T&C
                </a>
              </li>
              <li>
                Special Price: Get extra ₹3500 off (price inclusive of
                cashback/coupon){" "}
                <a href="#" className="text-blue-600">
                  T&C
                </a>
              </li>
              <li>
                Buy for 2000 get ₹500 off your Next Buy{" "}
                <a href="#" className="text-blue-600">
                  T&C
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-4 bg-gray-100 p-4 rounded">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <label>
                  <input
                    type="radio"
                    name="purchase-option"
                    className="mr-2"
                    defaultChecked
                  />
                  Buy without Exchange
                </label>
                <span className="font-bold">₹10,499</span>
              </div>
            </div>
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center space-x-4">
                <label>
                  <input type="radio" name="purchase-option" className="mr-2" />
                  Buy with Exchange
                </label>
                <span className="text-gray-500">up to ₹8,850 off</span>
              </div>
            </div>
          </div>

          <div className="mt-6 flex space-x-4">
            <button className="bg-yellow-500 text-white px-6 py-2 rounded shadow hover:bg-yellow-600">
              ADD TO CART
            </button>
            <button className="bg-orange-500 text-white px-6 py-2 rounded shadow hover:bg-orange-600">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
