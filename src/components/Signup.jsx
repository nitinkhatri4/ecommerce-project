import React from "react";

const Signup = () => {
  return (
    <div className="container  my-40 mx-auto w-[400px]">
      <div className="bg-gradient-to-r from-teal-500 to-slate-400 py-16">
      <div className=" flex flex-col justify-center gap-6 items-center">
        <h2 className="font-bold text-2xl">Sign Up</h2>
        <div className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Username"
            id="userName"
            className="border-2 rounded-md px-6 py-1.5 text-center"
          />
          <input
            type="email"
            placeholder="E-mail"
            id="email"
            className="border-2 rounded-md px-6 py-1.5 text-center"
          />
          <input
            type="password"
            placeholder="Password"
            id="password"
            className="border-2 rounded-md px-6 py-1.5 text-center"
          />
        </div>
        <button className="text-white border bg-gradient-to-r from-yellow-500 to-red-500 rounded-full px-14 py-1 font-serif">
          Sign Up
        </button>
      </div>
    </div>
    </div>
  );
};

export default Signup;
