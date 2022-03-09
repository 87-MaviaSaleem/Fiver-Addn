import { React, useEffect, useState } from "react";
import "./Cart-Product.css";
function CartProduct(params) {
  const [darkMode, setDarkMode] = useState(params.Mode);
  useEffect(() => {
    setDarkMode(params.Mode);
  });

  var products = [
    {
      brand: "Amazon",
      price: 5,
      region: "United States",
      img: "https://gowayn.com/uploads/companies/cover_photo/AMAZON-Cover.png",
    },
    {
      brand: "Amazon",
      price: 5,
      region: "United States",
      img: "https://gowayn.com/uploads/companies/cover_photo/AMAZON-Cover.png",
    },
  ];
  return (
    <div className="cartproduct-container">
      {products.map((item) => (
        <div className="cartproduct-box mb-3 mr-4">
          <div className="cartproduct-img">
            <img src={item.img} height="120"></img>
          </div>
          <div
            className={
              darkMode
                ? "cartproduct-details dark-cartproduct-details p-3"
                : "cartproduct-details p-4"
            }
          >
            <div className="cartproduct-name">
              <div className="cartproduct-title">
                <h4>{item.brand}</h4>
              </div>
              <div className="cartproduct-price">
                <h4>
                  $ <span>{item.price}</span>
                </h4>
              </div>
            </div>
            <div className="cartproduct-quantity">
              <h5>
                USD <span>{item.price} x 1</span>
              </h5>
            </div>
            <div className="cartproduct-region">
              <h6>
                Product Region <span>{item.region}</span>
              </h6>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartProduct;
