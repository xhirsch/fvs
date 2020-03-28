import React from "react";
import { bool, func } from 'prop-types';

const Hamburger = ({ open, setOpen }) => (
  <button open={open} onClick={() => setOpen(!open)} className="flex flex-col justify-around h-4">
    <div className="bg-black h-px w-4" />
    <div className="bg-black h-px w-4" />
    <div className="bg-black h-px w-4" />
  </button>
);

Hamburger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};
export default Hamburger;
