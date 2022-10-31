import React from "react";

const CustomToggle = ({ name, onChange, label, defaultChecked }) => {
  return (
    <div className="option flex justify-between items-center mb-2">
      <p>{label}</p>
      <label className="switch">
        <input
          type="checkbox"
          name={name}
          defaultChecked={defaultChecked}
          onChange={onChange}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default CustomToggle;
