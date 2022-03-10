import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Main from "./Components/Main/Main";
import { useState, useEffect } from "react";
//import fetch from "node-fetch";

function App() {
  const [darkMode, setDarkMode] = useState(getInitialMode());

  useEffect(() => {
    setDarkMode(getInitialMode());
  });
  function changeMode(mode) {
    setDarkMode(mode);

    fetch("https://api.prepaidforge.com/v1/1.0/findAllProducts", {
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        // Do some stuff ...
        console.log(data);
      })
      .catch((err) => console.log(err));
  }
  function getInitialMode() {
    const savedMode = JSON.parse(localStorage.getItem("dark"));
    return savedMode || false;
  }

  return (
    <div
      className={darkMode ? "dark-grid-container" : "grid-container"}
      id="grid-container"
    >
      <div className="grid-header">
        <Header Mode={darkMode}></Header>
      </div>
      <div className="dispatch" id="dispatch"></div>

      <div className="grid-main" id="grid-main">
        <Main Mode={darkMode}></Main>
      </div>
      <div className="grid-footer">
        <Footer setMode={changeMode}></Footer>
      </div>
    </div>
  );
}

export default App;
