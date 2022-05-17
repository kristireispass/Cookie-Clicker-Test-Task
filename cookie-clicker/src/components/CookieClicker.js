import React from "react";
import cookie from "../img/cookie.png"

export default function CookieClicker({ incrementCurrency }) {
  return (
    <img
      className="cookie-button"
      name="cookie-increment"
      src={cookie}
      alt="Cookie"
      onClick={incrementCurrency} />
  );
}