import { React, useEffect, useState, createContext, useContext } from "react";
import "./Main.css";
import Banner from "../Banner/Banner";
import Items from "../Items/Items";
import Cart from "../Cart/Cart";
import PaymentScreen from "../Payment/Payment";
var temp = new Array();
function Main(params) {
  const [darkMode, setDarkMode] = useState(params.Mode);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setDarkMode(params.Mode);
  });
  function changeCart(cartitems) {
    // temp.push(cartitems);
    //console.log("temp: " + temp);
    setCartItems(cartitems);
  }
  return (
    <div className="main-container" id="main-container">
      <div className="main-box">
        <PaymentScreen></PaymentScreen>
        <Banner Mode={darkMode}></Banner>
        <Cart Mode={darkMode} cart={cartItems}></Cart>
        <Items Mode={darkMode} setCart={changeCart}></Items>
      </div>
    </div>
  );
}

export default Main;
