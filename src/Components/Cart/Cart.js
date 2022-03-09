import { React, useEffect, useState } from "react";
import CartProduct from "../Cart-Product/Cart-Product";
import "./Cart.css";

function Cart(params) {
  const [darkMode, setDarkMode] = useState(params.Mode);
  useEffect(() => {
    setDarkMode(params.Mode);
  });

  function closeCartScreen() {
    document
      .getElementById("cart")
      .style.setProperty("width", "0%", "important");
    document
      .getElementById("item-screen")
      .style.setProperty("width", "0%", "important");
    document.getElementById("dispatch").style.setProperty("display", "none");
    document.getElementById("cart").classList.remove("cart-size");
  }
  return (
    <div
      className={
        darkMode ? "cart-container dark-cart-container" : "cart-container"
      }
      id="cart"
    >
      <div
        className={
          darkMode
            ? "backbtn-box dark-backbtn-box mt-3 mb-3 p-2 ml-2"
            : "backbtn-box mt-3 mb-3 p-2 ml-2"
        }
      >
        <button onClick={closeCartScreen}>Back</button>
      </div>
      <div className="cartdetails-box p-3">
        <div className="cart-quantity mb-3 ml-2">
          <h5>
            Your cart has <span>1 </span> items{" "}
          </h5>
        </div>
        <div className="order-container">
          <div className="cart-items">
            <CartProduct Mode={darkMode}></CartProduct>
          </div>
          <div className="order-details">
            <div
              className={
                darkMode
                  ? "order-summary dark-order-summary p-3"
                  : "order-summary p-3"
              }
            >
              <div className="summary-title">
                <h4>Order Summary</h4>
              </div>
              <div className="summary-details">
                <h5>Total: </h5>
                <h5>
                  $ <span>5</span>
                </h5>
              </div>
              <div className="summary-details">
                <h5>Fees: </h5>
                <h5>
                  $ <span>0</span>
                </h5>
              </div>
              <div className="summary-details">
                <h5>Discount: </h5>
                <h5>
                  -<span></span>
                </h5>
              </div>
              <div className="summary-details">
                <h4>Payable: </h4>
                <h4>
                  $ <span>0</span>
                </h4>
              </div>
            </div>
            <div
              className={
                darkMode
                  ? "order-information dark-order-information mt-3 p-3"
                  : "order-information p-3 mt-3"
              }
            >
              <div className="order-options">
                <h4>Order Information</h4>
              </div>
              <div className="order-options">
                <div className="order-name">
                  <h5>First Name</h5>
                  <input
                    className="first-name p-2 mr-3"
                    placeholder="First Name"
                  ></input>
                </div>
                <div className="order-name">
                  <h5>Last Name</h5>
                  <input className="p-2" placeholder="Last Name"></input>
                </div>
              </div>
              <div className="order-name mt-3">
                <h5>Your E-Mail</h5>
                <input className="p-2" placeholder="Your E-Mail"></input>
              </div>
              <div className="order-name mt-3">
                <h5>Promo Code</h5>
                <input className="p-2" placeholder="Promo Code"></input>
              </div>
              <div className="order-name mt-3">
                <h5>Payment Method</h5>
                <div className="header-currency">
                  <select
                    className="payment-btn p-2"
                    name="category"
                    id="category"
                  >
                    <option>NeoSurf</option>
                    <option>NeoSurf</option>
                    <option>Bitcoin</option>
                  </select>
                </div>
              </div>
              <div className="order-name mt-3">
                <h5>Confirm your phone number</h5>
                <div className="phoneno-box">
                  <div className="phone-code">
                    <div className="code-box p-2">
                      <h6>+33</h6>
                    </div>
                  </div>
                  <input
                    className="phone-no ml-2 mr-2 p-2"
                    placeholder="XXX-XXX-XXX"
                  ></input>
                  <button className="confirm-btn">Confirm</button>
                </div>
              </div>
              <div className="order-name mt-3">
                <button className="checkout-btn p-2">Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
