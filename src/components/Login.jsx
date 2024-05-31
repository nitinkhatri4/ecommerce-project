import React, { useEffect, useState } from "react";
import { renderMatches } from "react-router-dom";

const Login = () => {
  const [login, setLogin] = useState("Login");
  return (
    
      <div className="container  my-52 mx-auto w-[400px]">
        <div className=" justify-center bg-gradient-to-r from-blue-500 to-blue-200 flex flex-col items-center gap-6 py-14">
        <h2 className="font-bold text-2xl">Login</h2>
        <div className="flex flex-col gap-3">
          
          <input
            type="text"
            placeholder="Username"
            id="userName"
            className="border-2 rounded-md px-6 py-1.5 text-center"
            required
          />
          <input
            type="password"
            placeholder="Password"
            id="password"
            className="border-2 rounded-md px-6 py-1.5 text-center"
            required
          />
        </div>
        <button
          onClick={() => {
            
            
          }}
          className="text-white border bg-gradient-to-r from-yellow-500 to-red-500 rounded-full px-14 py-1 font-serif hover:transition-durationpy-1.5 hover:bg-gradient-to-r hover:from-red-500 hover:to-yellow-500"
        >
          Login
        </button>
      </div>
   
      </div>
  );
};

export default Login;
