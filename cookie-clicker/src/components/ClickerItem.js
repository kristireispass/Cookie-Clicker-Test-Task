import React from "react";

export default function ClickerItem({ amount, incrementAmount }) {
  return (
    <div 
    className="store-item"
    name={"click-increment-" + amount}
    onClick={incrementAmount}>
      <span>
        <i className="icon-price" /> 
        <br/>
        {amount + " "}
        <div className="tooltip">
          <i className="icon-info"/>
          <span className="tooltiptext">Adds {amount * 3 / 5} to cookies per click!</span>
        </div>
      </span>
    </div>
  );
}