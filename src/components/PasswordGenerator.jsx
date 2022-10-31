import React, { useState, useEffect } from "react";
import copy from "../assets/images/copy-paste.png";
import CustomToggle from "./CustomToggle";
import Footer from "./Footer";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(4);
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    generatePassword();
  }, []);

  const generatePassword = () => {
    setErrors({});
    if (!uppercase && !lowercase && !numbers && !symbols) {
      return setErrors("At least one character type must be selected");
    } else if (passwordLength === "0") {
      return setErrors("Password length cannot be 0");
    } else if (passwordLength === "") {
      return setErrors("Invalid password length");
    }
    // else if (passwordLength > 10) {
    //   return setErrors("Password length cannot exceed 0 characters");
    // }

    let password = "";
    for (let i = 0; i < passwordLength; i++) {
      let choice = random(0, 3);
      if (lowercase && choice === 0) {
        password += randomLower();
      } else if (uppercase && choice === 1) {
        password += randomUpper();
      } else if (symbols && choice === 2) {
        password += randomSymbol();
      } else if (numbers && choice === 3) {
        password += random(0, 9);
      } else {
        i--;
      }
    }
    setPassword(password);
  };

  const random = (min = 0, max = 1) => {
    return Math.floor(Math.random() * (max + 1 - min) + min);
  };

  const randomLower = () => {
    return String.fromCharCode(random(97, 122));
  };

  const randomUpper = () => {
    return String.fromCharCode(random(65, 90));
  };

  const randomSymbol = () => {
    const symbols = "~*$%@#^&!?*'-=/,.{}()[]<>";
    return symbols[random(0, symbols.length - 1)];
  };

  return (
    <div className="app">
      <p className="text-center pwd_span pt-44">
        <span className=" tracking-tighter">Password</span>
        &nbsp;&nbsp;&nbsp;
        <span className=" tracking-tighter">Generator</span>
      </p>
      <p className=" text-center text-3xl text-gray-800 text-opacity-70">
        Easy to use
      </p>
      <p className=" text-center text-3xl text-gray-800 text-opacity-70 mb-24">
        Best way to make strong passwords
      </p>

      <div className=" w-[600px] mx-auto">
        <div className=" relative  bg-gray-100 bg-opacity-100 p-3 shadow-sm">
          <p className=" text-xl text-left ">{password}</p>
          <div className=" absolute right-2 top-3 bg-white rounded-md">
            <div className="w-fit p-1">
              <img className=" w-7" src={copy} alt="copy" />
            </div>
          </div>
        </div>
        <div className="">
          <div className="">
            <div className="">
              <p className=" text-2xl font-black text-left my-5">
                LENGTH: {passwordLength}
              </p>

              <div className=" flex items-center justify-center gap-10">
                <p className=" text-2xl">4</p>
                <input
                  className=" w-full text-black"
                  type="range"
                  name="length"
                  min="4"
                  max="32"
                  step={1}
                  defaultValue={passwordLength}
                  onChange={(e) => setPasswordLength(e.target.value)}
                />
                <p className="text-2xl">32</p>
              </div>
            </div>
            <p className=" text-2xl font-black text-left my-5">SETTINGS</p>

            <CustomToggle
              label={"Uppercase"}
              name="uppercase"
              defaultChecked={uppercase}
              onChange={(e) => setUppercase(e.target.checked)}
            />

            <CustomToggle
              name={"lowercase"}
              label="Lowercase"
              defaultChecked={lowercase}
              onChange={(e) => setLowercase(e.target.checked)}
            />

            <CustomToggle
              label={"Numbers"}
              name="numbers"
              defaultChecked={numbers}
              onChange={(e) => setNumbers(e.target.checked)}
            />

            <CustomToggle
              label={"Symbols"}
              name="symbols"
              defaultChecked={symbols}
              onChange={(e) => setSymbols(e.target.checked)}
            />

            {errors.length && <li className="error">{errors}</li>}

            <button className=" text-center w-full" onClick={generatePassword}>
              Generate
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PasswordGenerator;
