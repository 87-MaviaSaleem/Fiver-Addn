import { React, useEffect, useState } from "react";
import "./Main.css";

import Banner from "../Banner/Banner";
import Items from "../Items/Items";
import Cart from "../Cart/Cart";
import ItemScreen from "../Product/Product";

function Main(params) {
  const [darkMode, setDarkMode] = useState(params.Mode);
  useEffect(() => {
    setDarkMode(params.Mode);
  });

  return (
    <div className="main-container" id="main-container">
      <div className="main-box">
        <Banner Mode={darkMode}></Banner>
        <Cart Mode={darkMode}></Cart>
        <Items Mode={darkMode}></Items>
        <ItemScreen Mode={darkMode}></ItemScreen>
      </div>
    </div>
  );
}

export default Main;
