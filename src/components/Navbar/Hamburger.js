import React from "react";

const Hamburger = ({ props }) => (
  <button className="flex flex-col justify-around h-4">
    <div className="bg-black h-px w-4" />
    <div className="bg-black h-px w-4" />
    <div className="bg-black h-px w-4" />
  </button>
);

export default Hamburger;
