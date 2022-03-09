import { React, useEffect, useState } from "react";
import "./Items.css";
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css"
  integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
  crossorigin="anonymous"
></link>;

function Items(params) {
  const [darkMode, setDarkMode] = useState(params.Mode);
  useEffect(() => {
    setDarkMode(params.Mode);
  });

  function openItemScreen() {
    document.getElementById("item-screen").style.setProperty("width", "60%");
    document.getElementById("dispatch").style.setProperty("display", "block");
    document.getElementById("item-screen").classList.add("itemscreen-size");
  }
  var products = [
    {
      img: "https://i.pinimg.com/originals/41/84/56/41845673072c6a3467807ea43e60eaf7.png",
      name: "Amazon",
      category: "Online Shopping",
    },
    {
      img: "https://i.pinimg.com/originals/41/84/56/41845673072c6a3467807ea43e60eaf7.png",
      name: "Amazon",
      category: "Online Shopping",
    },
    {
      img: "https://i.pinimg.com/originals/41/84/56/41845673072c6a3467807ea43e60eaf7.png",
      name: "Amazon",
      category: "Online Shopping",
    },
    {
      img: "https://i.pinimg.com/originals/41/84/56/41845673072c6a3467807ea43e60eaf7.png",
      name: "Amazon",
      category: "Online Shopping",
    },
  ];
  return (
    <div className="items-outercontainer">
      <div className="items-container mt-5">
        <div className="categories mr-4">
          <div className="categories1" id="categories1">
            <select
              className={
                darkMode
                  ? "country-btn dark-country-btn p-2"
                  : "country-btn p-2"
              }
              name="category"
              id="category"
            >
              <option id="cat-option">United States</option>
              <option id="cat-option">United States</option>
              <option id="cat-option">United Kingdom</option>
              <option id="cat-option">France</option>
              <option id="cat-option">Australia</option>
            </select>
          </div>
          <div
            className={
              darkMode
                ? "categories2 dark-categories2 mt-5 p-3"
                : "categories2 mt-5 p-3"
            }
            id="categories2"
          >
            <h3 className="cat-box">Categories</h3>
            <div className="radios">
              <input
                className="mr-2"
                type="radio"
                id="All"
                name="categories"
                value="all"
              ></input>
              <label for="all">All</label>
            </div>
            <div className="radios">
              <input
                className="mr-2"
                type="radio"
                id="Gaming"
                name="categories"
                value="gaming"
              ></input>
              <label for="gaming">Gaming</label>
            </div>
            <div className="radios">
              <input
                className="mr-2"
                type="radio"
                id="Fashion"
                name="categories"
                value="fashion"
              ></input>
              <label for="fashion">Fashion</label>
            </div>
            <div className="radios">
              <input
                className="mr-2"
                type="radio"
                id="fooddrinks"
                name="categories"
                value="fooddrinks"
              ></input>
              <label for="fooddrinks">Food & Drinks</label>
            </div>
            <div className="radios">
              <input
                className="mr-2"
                type="radio"
                id="Gambling"
                name="categories"
                value="gambling"
              ></input>
              <label for="gambling">Gambling</label>
            </div>
            <div className="radios">
              <input
                className="mr-2"
                type="radio"
                id="Entertainment"
                name="categories"
                value="entertainment"
              ></input>
              <label for="entertainment">Entertainment</label>
            </div>
            <div className="radios">
              <input
                className="mr-2"
                type="radio"
                id="Hotels"
                name="categories"
                value="hotels"
              ></input>
              <label for="hotels">Hotels</label>
            </div>
            <div className="radios">
              <input
                className="mr-2"
                type="radio"
                id="OnlinePayments"
                name="categories"
                value="onlinepayments"
              ></input>
              <label for="onlinepayments">Online Payments</label>
            </div>
          </div>
        </div>
        <div className="search_list">
          <div className="search">
            <div
              className={
                darkMode ? "searching dark-searching p-2" : "searching p-2"
              }
            >
              <div className="search-box ml-3">
                <div className="search_symbol">
                  <i class="fa fa-search"></i>
                </div>
                <div className="search-input">
                  <input
                    className="input1"
                    type="text"
                    id="search"
                    name="search"
                    placeholder="Start searching your gift card....."
                  ></input>
                </div>
              </div>
              <button
                className={
                  darkMode
                    ? "search_button dark-search_button mr-5"
                    : "search_button mr-5 "
                }
              >
                Search
              </button>
            </div>
            <div className="sorting" id="sorting">
              <select
                className={
                  darkMode
                    ? "country-btn dark-country-btn p-2"
                    : "country-btn p-2"
                }
                name="category"
                id="category1"
              >
                <optgroup className="grp">
                  <option id="cat-option">Popularity:High to Low</option>
                  <option id="cat-option">Popularity:High to Low</option>
                  <option id="cat-option">Name:A to Z</option>
                  <option id="cat-option">Name:Z to A</option>
                  <option id="cat-option">Date:Oldest to Latest</option>
                </optgroup>
              </select>
            </div>
          </div>
          <div className="list mt-5">
            <div
              className={
                darkMode
                  ? "grid-container1 dark-grid-container1"
                  : "grid-container1"
              }
            >
              {products.map((item) => (
                <div className="grid-item card-p">
                  <a onClick={openItemScreen}>
                    <img className="card" src={item.img} alt="Card image cap" />
                  </a>
                  <div className="card-body">
                    <h5 className="card-title" id="card-title">
                      {item.name}
                    </h5>
                    <p className="card-text" id="card-subtitle">
                      {item.category}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}
export default Items;
