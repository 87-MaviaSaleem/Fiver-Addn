import { React, useState, useEffect } from "react";
import "./Header.css";
import logo from "../../Assets/Logo.PNG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/fontawesome-free-solid";
function Header(params) {
  function openCartScreen() {
    document.getElementById("cart").style.setProperty("width", "60%");
    document.getElementById("dispatch").style.setProperty("display", "block");
    document.getElementById("cart").classList.add("cart-size");
  }

  const [darkMode, setDarkMode] = useState(params.Mode);
  useEffect(() => {
    setDarkMode(params.Mode);
  });
  return (
    <div
      className={darkMode ? "dark-header-container" : "header-container"}
      id="header-container"
    >
      <div className="header-box">
        <div className="header-logo">
          <img src={logo} width="100" height="30"></img>
        </div>
        <div className="header-options">
          <div
            className={
              darkMode
                ? "header-money dark-header-money mr-4"
                : "header-money mr-4"
            }
            id="header-money"
          >
            <FontAwesomeIcon className="wallet-icon" icon={faWallet} />
            <span id="money">$ 0.00</span>
            <button id="addmoney">+</button>
          </div>
          <div className="header-currency mr-4">
            <select
              className={
                darkMode ? "currency-btn dark-currency-btn" : "currency-btn"
              }
              name="category"
              id="category"
            >
              <optgroup id="cat-option">
                <option id="cat-option">USD</option>
                <option id="cat-option">USD</option>
                <option id="cat-option">CAD</option>
                <option id="cat-option">EUR</option>
                <option id="cat-option">AED</option>
              </optgroup>
            </select>
          </div>

          <div className="header-cart">
            <button
              className={darkMode ? "cart-btn dark-cart-btn" : "cart-btn"}
              onClick={openCartScreen}
            >
              <i className="cart-icon fa fa-shopping-cart mr-2"></i>
              <span className="cart-text" id="cart-text">
                shopping cart
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
