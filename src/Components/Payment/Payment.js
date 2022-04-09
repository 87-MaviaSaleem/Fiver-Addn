import { React, useEffect, useState } from "react";
import "./Payment.css";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Key from "./Key";

function PaymentScreen() {
  const [generate, setGenerate] = useState(false);
  const [change, setChange] = useState(false);
  const [buyer, setBuyer] = useState(
    sessionStorage.getItem("token")
      ? sessionStorage.getItem("key")
      : {
          key: uuidv4(),
          balance: 0,
        }
  );
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setBuyer({
        key: sessionStorage.getItem("key"),
        balance: sessionStorage.getItem("balance"),
      });
      document.getElementById("connect").style.setProperty("display", "none");
      document.getElementById("connect1").style.setProperty("display", "none");
      document.getElementById("signout").style.setProperty("display", "block");
    } else {
      document.getElementById("signout").style.setProperty("display", "none");
      document.getElementById("connect").style.setProperty("display", "block");
      document.getElementById("connect1").style.setProperty("display", "block");
    }
  });
  function updateBuyer(user) {
    setBuyer(user);
  }

  function handleSubmit1() {
    setGenerate(true);
    const user = {
      buyer: buyer,
      value: 1,
    };
    // console.log(buyer);
    // document.getElementById("myInput").setAttribute(buyer.key, "");
    axios.post("http://128.199.17.136/", user).then((result) => {
      console.log("successfully posted");
    });
  }

  function handleSubmit2() {
    if (buyer.key != "") {
      const user = {
        buyer: buyer,
        value: 2,
      };
      axios.post("http://128.199.17.136/", user).then((result) => {
        if (result) {
          console.log("successfully login");
          setBuyer({
            key: buyer.key,
            balance: buyer.balance,
          });
          sessionStorage.setItem("token", result.data.token); // decode your token here
          sessionStorage.setItem("key", result.data.BuyerExist.key);
          sessionStorage.setItem("balance", result.data.BuyerExist.balance);
        }
      });
    }
  }
  function copy() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    alert("Copied the text: " + copyText.value);
  }

  function handleSignOut() {
    sessionStorage.clear();
    setBuyer({
      key: "",
      balance: 0,
    });
  }
  function handleChange(event) {
    setChange(true);
    const { name, value } = event.target;
    //console.log(event.target.value);
    setBuyer((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  function handleRefill() {
    var amount = document.getElementById("amount").value;
    var method = document.getElementById("method").value;
    var data = JSON.stringify({
      price_amount: amount,
      price_currency: "usd",
      order_id: "RGDBP-21314",
      order_description: "Apple Macbook Pro 2019 x 1",
      ipn_callback_url: "https://nowpayments.io",
      success_url: "https://ozchest.com",
      cancel_url: "https://google.com",
    });

    var config = {
      method: "post",
      url: "https://api.nowpayments.io/v1/invoice",
      headers: {
        "x-api-key": "3X3KGP4-T0MM9JP-GT7DRPN-PG7ZCAQ",
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        if (response) {
          console.log(JSON.stringify(response.data));
          window.open(response.data.invoice_url);
          var config1 = {
            method: "get",
            url: `https://api.nowpayments.io/v1/payment/${response.data.id}`,
            headers: {
              "x-api-key": "3X3KGP4-T0MM9JP-GT7DRPN-PG7ZCAQ",
            },
          };

          axios(config1)
            .then(function (response1) {
              console.log(JSON.stringify(response1.data));
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div className="payment-container" id="payment">
      <div>
        <h1>Get/Put Your Key</h1>
        <div>
          <input
            name="key"
            id="myInput"
            type="text"
            placeholder="key"
            onChange={handleChange}
            value={
              sessionStorage.getItem("token")
                ? sessionStorage.getItem("key")
                : generate
                ? buyer.key
                : change
                ? buyer.key
                : ""
            }
          />

          <button className="ml-4 refill-btn1" onClick={copy}>
            C
          </button>
        </div>

        <button
          id="connect"
          className="mr-4 mt-4 refill-btn"
          onClick={handleSubmit1}
        >
          Generate
        </button>
        <button
          id="connect1"
          className=" mt-4 refill-btn"
          onClick={handleSubmit2}
        >
          Connect
        </button>
        <button
          id="signout"
          className=" mt-4 refill-btn"
          onClick={handleSignOut}
        >
          Logout
        </button>
        <p className="mt-4"> balance = {buyer.balance}</p>
      </div>
      <div className="payment-box">
        <div className="payment-bar">
          <input id="amount"></input>
          <select name="method" id="method">
            <option>Crypto</option>
          </select>
          <button className="refill-btn" onClick={handleRefill}>
            Refill
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaymentScreen;
