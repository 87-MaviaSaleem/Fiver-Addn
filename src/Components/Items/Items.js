import { React, useEffect, useState } from "react";
import "./Items.css";
import axios from "axios";
import ItemScreen from "../Product/Product";
const jsonData = require("./Brands.json");
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css"
  integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
  crossorigin="anonymous"
></link>;

function Items(params) {
  const [darkMode, setDarkMode] = useState(params.Mode);
  const [Products, setProducts] = useState([]);
  const [Brand, setBrand] = useState({});
  const [countries, setCountries] = useState([]);
  const [Curr, setCurr] = useState([]);
  const [Stock, setStock] = useState({});
  const [Fee, setFee] = useState();
  const [USDPrice, setUSDPrice] = useState();
  useEffect(() => {
    axios.get("http://128.199.17.136/").then((result) => {
      if (result) {
        sessionStorage.setItem("apitoken", result.data.apiToken); // decode your token here
      }
    });
  }, [1]);

  function changeCart(item, Fee, price, code) {
    params.setCart(item, Fee, price, code);
  }
  useEffect(() => {
    setDarkMode(params.Mode);
    setProducts(jsonData);
  });

  var Screen;

  function updatePrice(brand) {
    var value = document.getElementById("country").value;
    const data = {
      brand: brand,
      country: value,
      value: 4,
    };
    axios.post("http://128.199.17.136/", data).then((response) => {
      //console.log(response.data);
      setCurr(response.data);
    });
  }

  function updateStock(brand1, code1, v) {
    var value = document.getElementById("country").value;
    var value1 = document.getElementById("price").value;
    //console.log("stock");
    let data;
    if (v === 1) {
      data = {
        brand: brand1,
        country: value,
        code: Curr.code,
        price: Number(Curr.price ? Curr.price[0] : 0),
        apitoken: sessionStorage.getItem("apitoken"),
        value: 5,
      };
    } else if (v === 2) {
      data = {
        brand: brand1,
        country: value,
        code: Curr.code,
        price: Number(value1),
        apitoken: sessionStorage.getItem("apitoken"),
        value: 5,
      };
    }
    console.log(data);
    if (brand1 !== undefined && code1 !== undefined) {
      axios.post("http://128.199.17.136/", data).then((response) => {
        console.log("front");
        /*console.log("token");
        console.log(sessionStorage.getItem("apitoken"));
        console.log("sku");
        console.log(response.data);*/
        //console.log(response.data);
        if (v === 1) {
          document.getElementById("price").value = Curr.price
            ? Curr.price[0]
            : 0;
        }
        setStock(response.data);
        updateFee(data.code, data.price, response.data.purchasePrice);
      });
    }
  }

  function updateFee(from1, amount, price) {
    const data = {
      from: from1,
      to: "USD",
      amount: amount,
      value: 6,
    };
    console.log(data);
    axios.post("http://128.199.17.136/", data).then((response2) => {
      console.log(price);
      console.log(response2.data.cur);
      setUSDPrice(response2.data.cur);
      if (price < response2.data.cur) {
        setFee(0);
        console.log("fee" + 0);
      } else if (price > response2.data.cur && response2.data.cur < 50) {
        setFee(2.3);
        console.log("fee" + 2.3);
      } else if (price > response2.data.cur && response2.data.cur > 50) {
        setFee(3.4);
        console.log("fee" + 3.3);
      }
    });
  }
  function openItemScreen(index) {
    setBrand(Products[index]);
    const data = {
      brand: Products[index].Brand,
      amount: 20,
      currency: "GBP",
      value: 3,
    };
    axios.post("http://128.199.17.136/", data).then((response) => {
      //console.log(response.data);
      setCountries(response.data.countries);
      setCurr(response.data.curr);
      console.log("code2");
      console.log(response.data.curr.code);
      const data = {
        brand: Products[index].Brand,
        country: response.data.countries[0],
        code: response.data.curr.code,
        price: Number(response.data.curr.price[0]),
        apitoken: sessionStorage.getItem("apitoken"),
        value: 5,
      };
      console.log("data2");
      console.log(data);
      axios.post("http://128.199.17.136/", data).then((response1) => {
        console.log("front2");
        /*console.log("token2");
        console.log(sessionStorage.getItem("apitoken"));
        console.log("sku2");
        console.log(response1.data);*/
        //console.log(response.data);
        setStock(response1.data);
        updateFee(
          response.data.curr.code,
          Number(response.data.curr.price[0]),
          response1.data.curr.purchasePrice
        );
      });
    });

    document.getElementById("item-screen").style.setProperty("width", "60%");
    document.getElementById("dispatch").style.setProperty("display", "block");
    document.getElementById("item-screen").classList.add("itemscreen-size");
  }
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
              <label for="fashion">Mobile recharge</label>
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
              <label for="hotels">Shopping</label>
            </div>
            <div className="radios">
              <input
                className="mr-2"
                type="radio"
                id="OnlinePayments"
                name="categories"
                value="onlinepayments"
              ></input>
              <label for="onlinepayments">Payment cards</label>
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
              {Products.map((item, index) => (
                <div className="grid-item card-p">
                  <a onClick={() => openItemScreen(index)}>
                    <img
                      className="card"
                      src={item.imageUrl}
                      alt="Card image cap"
                    />
                  </a>
                  {Screen}
                  <div className="card-body">
                    <p className="card-text" id="card-subtitle">
                      {item.Brand}
                    </p>
                  </div>
                </div>
              ))}
              <ItemScreen
                Mode={darkMode}
                Item={Brand}
                setCart={changeCart}
                country={countries}
                curr={Curr}
                stock={Stock}
                updateprice={updatePrice}
                updatestock={updateStock}
                fee={Fee}
                usd={USDPrice}
              ></ItemScreen>
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
