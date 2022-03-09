import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Main from "./Components/Main/Main";
import { useState, useEffect } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(getInitialMode());

  useEffect(() => {
    setDarkMode(getInitialMode());
  });
  function changeMode(mode) {
    setDarkMode(mode);
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
