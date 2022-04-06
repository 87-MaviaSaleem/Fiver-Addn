import { React, useEffect, useState } from "react";
import "./Payment.css";
import axios from "axios";

function PaymentScreen() {
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
      <div className="payment-bar1">
        <p>Enter amount to add in your account</p>
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
