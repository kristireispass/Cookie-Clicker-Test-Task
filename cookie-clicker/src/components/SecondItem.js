import React from "react";

export default function SecondItem({ amount, incrementAmount }) {
  return (
    <div 
    className="store-item"
    name={"second-increment-" + amount}
    onClick={incrementAmount}>
      <span>
        <i className="icon-price" /> 
        <br/>
        {amount + " "}
        <div className="tooltip">
          <i className="icon-info"/>
          <span className="tooltiptext">Adds {amount / 100} to cookies per second!</span>
        </div>
      </span>
    </div>
  );
}