import React from "react";

const Footer = () => {
  return (
    <div className=" flex justify-between mx-10 my-20 pb-32 relative">
      <div className=" flex flex-col gap-4">
        <p className=" text-black font-bold text-4xl text-opacity-90">GenPWD</p>
        <p className="text-gray-700 text-opacity-90 ">Terms . Privacy Policy</p>
      </div>
      <div className=" flex gap-10">
        <div className=" text-lg w-40 flex flex-col gap-3 text-gray-700 text-opacity-90">
          <p className=" text-black font-medium ">Other Product</p>
          <p>Strong Password Generator</p>
          <p>Advance Password Generator</p>
        </div>
        <div className=" text-lg w-40 flex flex-col gap-3 text-gray-700 text-opacity-90">
          <p className=" text-black font-medium">About us</p>
          <p>About</p>
          <p>Contact Us</p>
          <p>Share</p>
        </div>
      </div>
      <p className="absolute right-0 -bottom-10 text-xl text-gray-800 text-opacity-80">
        Created by <span className=" text-blue-500">Ritesh Davra</span>
      </p>
    </div>
  );
};

export default Footer;
