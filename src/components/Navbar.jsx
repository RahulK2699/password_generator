import React from "react";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

const Navbar = () => {
  return (
    <div className="fixed z-10 overflow-hidden bg-white w-full bg-opacity-90 backdrop-blur-sm">
      <div className=" flex justify-between items-center px-10 border-b py-5 ">
        <p className=" text-black font-black  text-4xl ">GenPWD</p>
        <div className="flex w-[670px]  justify-between items-center text-2xl font-medium text-gray-600">
          <p>Home</p>
          <p>Advance</p>
          <p>About</p>
          <p>Share</p>
          <p>Contact Us</p>
          <div className=" border-[4px] border-white w-fit px-3 pt-2 pb-3 rounded-2xl hover:bg-gray-700 hover:bg-opacity-10 ">
            {
              <LightModeOutlinedIcon
                fontSize="large"
                className=" text-black text-opacity-50"
              />
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
