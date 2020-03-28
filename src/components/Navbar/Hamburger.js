import React, { useCallback } from "react";
import { bool, func } from 'prop-types';
import './burger.css';

const Hamburger = ({ setOpen, open }) => {

  const handleClick = useCallback((e) => {
    setOpen(prev => !prev)
  }, [setOpen]);

  return (
    <button onClick={handleClick} className={`burger-container ${open && 'x'}`}>
      <div id="topline" />
      <div id="centerline" />
      <div id="bottomline" />
    </button>
  )
};

Hamburger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};
export default Hamburger;
