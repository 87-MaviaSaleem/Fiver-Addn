import { React, useEffect, useState } from "react";
import "./Product.css";

function ItemScreen(params) {
  const [darkMode, setDarkMode] = useState(params.Mode);
  const [Card, setCard] = useState(params.Item);
  useEffect(() => {
    setDarkMode(params.Mode);
  });
  useEffect(() => {
    /*if (window.location.pathname === `/${Card.brand}`) {
      console.log("sidebar");
      document.getElementById("item-screen").style.setProperty("width", "60%");
      document.getElementById("dispatch").style.setProperty("display", "block");
      document.getElementById("item-screen").classList.add("itemscreen-size");
      setDescription();
    }*/
    params.setCart();
    setCard(params.Item);
    console.log(Card);
  }, [params.Item]);

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
  function handleCart() {
    var price1 = document.getElementById("price").value;
    var amount1 = document.getElementById("amount").value;
    var item = [
      {
        image: params.Item.imageUrl,
        brand: params.Item.Brand,
        price: price1,
        amount: amount1,
      },
    ];
    params.setCart(item);
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
            <img src={Card.imageUrl}></img>
          </div>
          <div className="item-details">
            <div className="item-title mb-2">
              <h1>{Card.Brand} Cards</h1>
            </div>
            <div className="item-desc">
              <div className="itemdesc-row mb-2">
                <p>
                  {Card.Desc ? Card.Desc[0] : ""}
                  <br />
                  <br />
                  {Card.Desc ? Card.Desc[1] : ""}
                  <br />
                  <br />
                  {Card.Desc ? Card.Desc[2] : ""}
                  <br />
                  <br />
                  {Card.Desc ? Card.Desc[3] : ""}
                </p>
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
                        id="country"
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
                        id="amount"
                      >
                        <option value="1">01</option>
                        <option value="1">01</option>
                        <option value="2">02</option>
                        <option value="3">03</option>
                        <option value="4">04</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="checkout-row2 mb-3">
                  <div className="amount-title mb-3">
                    <span>Select Amount</span>
                  </div>
                  <div className="categories1">
                    <select className="country-btn p-2" id="price">
                      <option value="5">USD 5</option>
                      <option value="5">USD 5</option>
                      <option value="10">USD 10</option>
                      <option value="20">USD 20</option>
                      <option value="50">USD 50</option>
                    </select>
                  </div>
                </div>
                <div className="checkout-row mb-3">
                  <button
                    onClick={handleCart}
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
              <div className="itemdesc-row mb-2">
                <p>
                  {Card.Desc ? Card.Desc[0] : ""}
                  <br />
                  <br />
                  {Card.Desc ? Card.Desc[1] : ""}
                  <br />
                  <br />
                  {Card.Desc ? Card.Desc[2] : ""}
                  <br />
                  <br />
                  {Card.Desc ? Card.Desc[3] : ""}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemScreen;
