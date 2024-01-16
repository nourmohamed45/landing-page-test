import { Radio } from "@mui/material";
// import { useState } from "react";

import PropTypes from "prop-types";

function Offers({
  type,
  title,
  description,
  oldPrice,
  currentPrice,
  radioType,
  radioInputProp,
  selectedValue,
  handleChange,
  handleClick,
  activeOffer,
}) {
  const isActive = radioType === activeOffer;
  return (
    <>
      <div
        className={isActive ? `active ${type}` : type}
        onClick={() => {
          handleClick(radioType);
        }}
      >
        <div className="start">
          <Radio
            checked={selectedValue === radioType}
            onChange={handleChange}
            value={radioType}
            name="radio-buttons"
            inputProps={{ "aria-label": radioInputProp }}
            style={{ color: "black" }}
          />
          <div className="mid">
            <span className="title">{title}</span>
            <span className="describe">{description}</span>
          </div>
        </div>
        <div className="end">
          <div className="current-price">LE {currentPrice}</div>
          <div className="old-price">LE {oldPrice}</div>
        </div>
      </div>
    </>
  );
}

export default Offers;

Offers.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  oldPrice: PropTypes.string,
  currentPrice: PropTypes.string,
  radioInputProp: PropTypes.string,
  radioType: PropTypes.string,
  selectedValue: PropTypes.string,
  activeOffer: PropTypes.string,
  handleChange: PropTypes.func,
  handleClick: PropTypes.func,
};
