import { React, useEffect, useState } from "react";
import "./Product.css";

function ItemScreen(params) {
  const [darkMode, setDarkMode] = useState(params.Mode);
  useEffect(() => {
    setDarkMode(params.Mode);
  });

  function openCartScreen() {
    document.getElementById("cart").style.setProperty("width", "60%");
    document.getElementById("cart").classList.add("cart-size");
  }
  function closeItemScreen() {
    document
      .getElementById("item-screen")
      .style.setProperty("width", "0%", "important");
    document.getElementById("grid-container").style.backgroundColor =
      "rgb(236, 245, 254)";
    document.getElementById("header-container").style.backgroundColor =
      "rgb(236, 245, 254)";
    document.getElementById("header-money").style.backgroundColor = "white";
    document.getElementById("dispatch").style.setProperty("display", "none");
    document.getElementById("item-screen").classList.remove("itemscreen-size");
  }
  return (
    <div
      className={
        darkMode
          ? "product-container dark-product-container"
          : "product-container"
      }
      id="item-screen"
    >
      <div
        className={
          darkMode
            ? "backbtn-box dark-backbtn-box mt-3 mb-3 p-2 ml-2"
            : "backbtn-box mt-3 mb-3 p-2 ml-2"
        }
      >
        <button onClick={closeItemScreen}>Back</button>
        <div className="header-cart">
          <button className="cart-btn" onClick={openCartScreen}>
            <i className="cart-icon fa fa-shopping-cart mr-2"></i>
            <span className="cart-text">shopping cart</span>
          </button>
        </div>
      </div>
      <div className="itemdetails-container mt-3">
        <div className="itemdetails-box">
          <div className="item-image">
            <img src="https://i.pinimg.com/originals/41/84/56/41845673072c6a3467807ea43e60eaf7.png"></img>
          </div>
          <div className="item-details">
            <div className="item-title mb-2">
              <h1>Amazon Cards</h1>
            </div>
            <div className="item-desc">
              <div className="itemdesc-row mb-2">
                <p>
                  Amazon offers a wide variety of products, ranging from movies
                  and books to video games, furniture, food, jewelry,
                  electronics, software, apparel, food, toys, and much, much
                  more to choose from over 12 million different products and
                  more than 2.5 million sellers. It's the world's largest
                  retailer, so whatever you're looking for, you can be sure that
                  Amazon will have you covered.
                </p>
              </div>
              <div className="itemdesc-row mb-2">
                <p>
                  With an Amazon Prime subscription, you're getting free, fast
                  delivery, exclusive deals, discounts and access to a family of
                  online entertainment services, including games and free loot,
                  Kindle books & magazines, movies & TV shows, Twitch Prime
                  livestreaming and over 2 million songs with Amazon Music.
                </p>
              </div>
              <div className="itemdesc-row mb-2">
                <p>
                  The Amazon Gift Card is an excellent choice for any occasion,
                  whether you want to congratulate someone dear to you on their
                  achievements or wish them a happy birthday.
                </p>
              </div>
              <div className="itemdesc-row mb-2">
                <p>Terms & Conditions apply.</p>
              </div>
            </div>
            <div
              className={
                darkMode
                  ? "checkout-container dark-checkout-container"
                  : "checkout-container"
              }
            >
              <div className="checkout-box m-4">
                <div className="checkout-row1 mb-3">
                  <div className="region-box">
                    <div className="region-title mb-3">
                      <span>Choose your region</span>
                    </div>
                    <div className="categories1">
                      <select
                        className="country-btn p-2"
                        name="category1"
                        id="category1"
                      >
                        <option>United States</option>
                        <option>United States</option>
                        <option>United Kingdom</option>
                        <option>France</option>
                        <option>Australia</option>
                      </select>
                    </div>
                  </div>
                  <div className="amount-box">
                    <div className="amount-title mb-3">
                      <span>Select Amount</span>
                    </div>
                    <div className="categories1">
                      <select
                        className="country-btn p-2"
                        name="category"
                        id="category"
                      >
                        <option>01</option>
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                        <option>04</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="checkout-row2 mb-3">
                  <div className="amount-title mb-3">
                    <span>Select Amount</span>
                  </div>
                  <div className="categories1">
                    <select className="country-btn p-2">
                      <option>USD 5</option>
                      <option>USD 5</option>
                      <option>USD 10</option>
                      <option>USD 20</option>
                      <option>USD 50</option>
                    </select>
                  </div>
                </div>
                <div className="checkout-row mb-3">
                  <button
                    className={
                      darkMode
                        ? "checkcart-btn dark-checkcart-btn p-2"
                        : "checkcart-btn p-2"
                    }
                  >
                    Add 1 Card to Cart
                  </button>
                </div>
                <div className="checkout-row">
                  <button className="checkout-btn p-2">Checkout</button>{" "}
                </div>
              </div>
            </div>
            <div className="item-desc1">
              <div className="item-title mb-2 mt-2">
                <h1>Description</h1>
              </div>
              <div className="itemdesc-row mb-2 ">
                <p>
                  Amazon offers a wide variety of products, ranging from movies
                  and books to video games, furniture, food, jewelry,
                  electronics, software, apparel, food, toys, and much, much
                  more to choose from over 12 million different products and
                  more than 2.5 million sellers. It's the world's largest
                  retailer, so whatever you're looking for, you can be sure that
                  Amazon will have you covered.
                </p>
              </div>
              <div className="itemdesc-row mb-2">
                <p>
                  With an Amazon Prime subscription, you're getting free, fast
                  delivery, exclusive deals, discounts and access to a family of
                  online entertainment services, including games and free loot,
                  Kindle books & magazines, movies & TV shows, Twitch Prime
                  livestreaming and over 2 million songs with Amazon Music.
                </p>
              </div>
              <div className="itemdesc-row mb-2">
                <p>
                  The Amazon Gift Card is an excellent choice for any occasion,
                  whether you want to congratulate someone dear to you on their
                  achievements or wish them a happy birthday.
                </p>
              </div>
              <div className="itemdesc-row mb-2">
                <p>Terms & Conditions apply.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemScreen;
