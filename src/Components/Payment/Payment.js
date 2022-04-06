import { React, useEffect, useState } from "react";
import "./Payment.css";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

function PaymentScreen() {
  const [buyer, setBuyer] = useState({
    key: uuidv4(),
    balance: 0,
  });

  function handleChange(event) {
    const { name, value } = event.target;
    console.log(event.target.value);

    setBuyer((prevValue) => {
      return { ...prevValue, [name]: value };
    });
    console.log("sheikh change");
  }

  function handleSubmit1(e) {
    const user = {
      buyer: buyer,
      value: 1,
    };
    console.log(user.buyer);
    axios.post("http://localhost:8000", user).then((result) => {
      console.log("successfully posted");
      setBuyer({
        key: "",
        balance: "",
      });
    });
  }

  function handleSubmit2(e) {
    if (buyer.key != "") {
      const user = {
        buyer: buyer,
        value: 2,
      };
      axios.post("http://localhost:8000", user).then((result) => {
        if (result) {
          console.log("successfully login");
          setBuyer({
            key: buyer.key,
            balance: buyer.balance,
          });
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
        <form>
          <h1>Get/Put Your Key</h1>
          <div>
            <input
              value={buyer.key}
              name="key"
              id="myInput"
              onChange={handleChange}
              type="text"
              placeholder="key"
            />

            <button className="ml-4 refill-btn1" onClick={copy}>
              C
            </button>
          </div>

          <button className="mr-4 mt-4 refill-btn" onClick={handleSubmit1}>
            Generate
          </button>
          <button className=" mt-4 refill-btn" onClick={handleSubmit2}>
            Connect
          </button>

          <p className="mt-4"> balance = {buyer.balance}</p>
        </form>
      </div>
      <div className="payment-box">
        <div className="payment-bar">
          <input id="amount"></input>
          <select name="method" id="method">
            <option>NeoSurf</option>
            <option>Bitcoin</option>
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
